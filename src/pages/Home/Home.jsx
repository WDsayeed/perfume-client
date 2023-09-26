
import DiscountSec from "../../components/Discount/DiscountSec";
import Container from "../../components/Container";
import Banner from "../../components/Banner/Banner";
import BestSelPerfume from "../../components/BestSelPerfume/BestSelPerfume";
import WatchShop from "../../components/watchShop/WatchShop";
import Gallery from "../../components/Gallery/Gallery";


const Home = () => {
  return (
<>
<Container>      
      <Banner></Banner>
      <DiscountSec></DiscountSec>
      <BestSelPerfume></BestSelPerfume>
     
    </Container>
     <WatchShop></WatchShop>
     <Gallery></Gallery>
</>
  );
};

export default Home;
