import { HiOutlineHeart, HiSearch, HiShoppingCart } from "react-icons/hi";

const SingleShop = ({ perfume }) => {
  const { name, img, price, _id, quantity } = perfume;

  return (
    <div>
      <div className="relative product-wrapper">
        <img src={img} alt="" />
        <div className="product-side-button absolute  flex flex-col justify-center   gap-5 p-3">
          <div className="lg:tooltip" data-tip="Add to Wishlist">
            <button
              // onClick={() => handleWishList(perfume)}
              className="bg-white hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white p-2 rounded-full drop-shadow-md"
            >
              <HiOutlineHeart className="w-6 h-6"></HiOutlineHeart>
            </button>
          </div>
          <div className="lg:tooltip" data-tip="Add to Cart">
            <button
              //       onClick={handleAddToCart}
              className="bg-white p-2 rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white"
            >
              <HiShoppingCart className="w-6 h-6"></HiShoppingCart>
            </button>
          </div>
          <div className="lg:tooltip" data-tip="Quickview">
            <button
        //       onClick={() => handleQuickViewData(_id)}
              className="bg-white p-2 rounded-full drop-shadow-md hover:bg-[#116D6E] hover:transition-colors hover:duration-300  hover:text-white"
            >
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

export default SingleShop;
