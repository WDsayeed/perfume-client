
import DiscountSec from "../../components/Discount/DiscountSec";
import Container from "../../components/Container";
import Banner from "../../components/Banner/Banner";
import BestSelPerfume from "../../components/BestSelPerfume/BestSelPerfume";
import WatchShop from "../../components/watchShop/WatchShop";
import Gallery from "../../components/Gallery/Gallery";
import AboutUs from './../../components/AboutUs/AboutUs';
import Featured from "../../components/Featured/Featured";
import Brands from "../../components/Brands/Brands";


const Home = () => {
  return (
<>
<Container>      
      <Banner></Banner>
      <DiscountSec></DiscountSec>
      <BestSelPerfume></BestSelPerfume>
    </Container>
      <WatchShop></WatchShop>
      <AboutUs></AboutUs>
      <Featured></Featured>
      <Brands></Brands>
     <Gallery></Gallery>
</>
  );
};

export default Home;
