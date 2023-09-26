
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
// import Drawer from '../components/Drawer/Drawer';

const Main = () => {
        return (
                <div>
                        <Header></Header>
                        {/* <Drawer></Drawer> */}
                        <Outlet></Outlet>
                        <Footer></Footer>
                </div>
        );
};

export default Main;