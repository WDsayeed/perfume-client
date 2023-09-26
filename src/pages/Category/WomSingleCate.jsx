import React, { useContext } from 'react';
import { HiOutlineHeart, HiSearch, HiShoppingCart } from 'react-icons/hi';
import Swal from 'sweetalert2';
import { AuthContext } from '../../components/provider/AuthProvider';

const WomSingleCate = ({ item, setId }) => {
        const {user} = useContext(AuthContext)
        const { name, price, img, _id, quantity } = item
        
        const handleWishList = () => {
                const savedData = {
                  wishListId: _id,
                  name,
                  img,
                  price,
                  quantity
                };
            
                if (user) {
                  fetch("http://localhost:5000/wishList", {
                    method: "POST",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(savedData),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      console.log(data);
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
              
              const handleModalData = (id) => {
                      setId(id);
                      window.my_modal_5.showModal();
                const savedData = {
                  addCartId: _id,
                  name,
                  img,
                  price,
                  quantity
                };
                if(user){
                  fetch("http://localhost:5000/addToCart",{
                    method:'POST',
                    headers:{
                      'content-type' : 'application/json'
                    },
                    body:JSON.stringify(savedData)
                  })
                  .then(res=>res.json())
                  .then(data=>{
                    console.log(data)
                    if(data.insertedId){
                      Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'The product has been successfully added to your cart',
                        showConfirmButton: false,
                        timer: 2000
                      })
                    }
                  })
                }
              };
        return (
                <div>
                <div className="relative product-wrapper">
                  <img src={img} alt="" />
                  <div className="product-side-button absolute  flex flex-col justify-center   gap-5 p-3">
                    <div className="lg:tooltip" data-tip="Add to Wishlist">
                      <button
                        onClick={() => handleWishList(item)}
                        className="bg-white hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white p-2 rounded-full drop-shadow-md"
                      >
                        <HiOutlineHeart className="w-6 h-6"></HiOutlineHeart>
                      </button>
                    </div>
                    <div className="lg:tooltip" data-tip="Add to Cart">
                    <button
                      onClick={() => handleModalData(_id)}
                      className="bg-white p-2 rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white"
                    >
                      <HiShoppingCart className="w-6 h-6"></HiShoppingCart>
                    </button>
                    </div>
                  <div className="lg:tooltip" data-tip="Quickview">
                  <button   className="bg-white p-2 rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white">
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

export default WomSingleCate;