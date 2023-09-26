import { Link } from "react-router-dom";
import discImg1 from "../../assets/bannerV3-img1.webp";
import discImg2 from "../../assets/bannerV3-img2.webp";
import "./Discount.css";

const DiscountSec = () => {
  return (
    <div className="md:flex gap-5 mt-10">
      {/* <div>
      <div className="discount-section-img-1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, possimus?</p>
      </div>
      </div>
      <div>
      <div className="discount-section-img-2">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, possimus?</p>
      </div>
      </div> */}
      {/* <div
      className="w-full h-full"
        style={{
          backgroundImage: `url(${discImg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height:""
        }}
      >
        heloobbbbbbbbbbbbbbbbbbb
      </div>
      <div
      className="w-full h-full"
        style={{
          backgroundImage: `url(${discImg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>heloo</h1>
      </div> */}
      <div className="main-div-1 relative overflow-hidden ">
        <div>
          <img className="desc-img-1  duration-500" src={discImg1} alt="" />
          <div className="text-div">
            <h1 className="text-5xl font-medium">
              Significance Of <br />
              Glamour With <br /> 20% Off
            </h1>
            <Link to='/shop' className="underline underline-offset-8">
              <button className="shop-button underline underline-offset-8 ">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="main-div-2 relative overflow-hidden ">
        <div>
          <img className="desc-img-2  duration-500" src={discImg2} alt="" />
        </div>
        <div className="text-div">
          <h1 className="text-5xl font-medium">
            Fragrance That <br /> Makes The Outfits
          </h1>
          <Link to='/shop'>
            <button className="shop-button">Shop Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscountSec;
