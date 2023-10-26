import { useContext } from "react";
import Swal from "sweetalert2";
import "../../components/BestSelPerfume/BestSelPerfume.css";
import { AuthContext } from "../../components/provider/AuthProvider";
import { HiOutlineHeart, HiSearch, HiShoppingCart } from "react-icons/hi";
import UseCart from "../../hooks/UseCart";
import { useLocation, useNavigate } from "react-router-dom";

const CategorySingle = ({ item, setId, setIsOpen}) => {
  const { user } = useContext(AuthContext);
  const { img, _id, name, price, quantity } = item;
  const [, refetch] = UseCart();
  const navigate = useNavigate()
  const location = useLocation()

  const handleWishList = () => {
    const savedData = {
      wishListId: _id,
      name,
      img,
      price,
      quantity,
    };

    if (user) {
      fetch("https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/wishList", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //update to cart badge
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "The product has been successfully added to your wishlist",
              showConfirmButton: false,
              timer: 2000,
            });
          }

          if (data.message) {
            Swal.fire({
              title: "This product is already in your wishlist.",
              showClass: {
                popup: "animate__animated animate__swing animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__swing animate__fadeOutUp",
              },
            });
          }
        });
    }
  };

  const handleAddToCart = () => {
    const savedData = {
      addCartId: _id,
      name,
      img,
      price,
      quantity,
      email: user?.email
    };
    if (user && user?.email) {
      fetch("https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/addToCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: "top-center",
              icon: "success",
              title: "The product has been successfully added to your cart",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to add to cart",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", {state: {from:location}});
        }
      });
    }
  };

  const handleQuickViewData = (id) => {
    setId(id);
    setIsOpen(true)
  };
  return (
    <div>
      <div className="relative product-wrapper">
        <img src={img} alt="" />
        <div className="product-side-button absolute  flex flex-col justify-center   gap-5 p-3">
          <div className="lg:tooltip" data-tip="Add to Wishlist">
            <button
              onClick={() => handleWishList(item)}
              className="bg-white hover:bg-[#4ab2df] hover:transition-colors hover:duration-300  hover:text-white p-2 rounded-full drop-shadow-md"
            >
              <HiOutlineHeart className="w-6 h-6"></HiOutlineHeart>
            </button>
          </div>
          <div className="lg:tooltip" data-tip="Add to Cart">
            <button
              onClick={handleAddToCart}
              className="bg-white p-2 rounded-full drop-shadow-md hover:bg-[#4ab2df] hover:transition-colors hover:duration-300  hover:text-white"
            >
              <HiShoppingCart className="w-6 h-6"></HiShoppingCart>
            </button>
          </div>
          <div className="lg:tooltip" data-tip="Quickview">
            <button onClick={()=> handleQuickViewData(_id)} className="bg-white p-2 rounded-full drop-shadow-md hover:bg-[#4ab2df] hover:transition-colors hover:duration-300  hover:text-white">
              <HiSearch className="w-6 h-6"></HiSearch>
            </button>
          </div>
        </div>
        <h3>{name}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CategorySingle;
