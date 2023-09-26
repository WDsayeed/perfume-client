import sideImg from '../../assets/videoV1-img-small.webp'
import Container from '../Container';
const WatchShop = () => {
        return (
             <div className='bg-gray-100 p-10 mt-28'>
                  <Container>
                <h1 className='text-center text-6xl font-semibold mb-10'>Watch & Shop</h1>
                 <div className='md:flex w-full'>
                      <div className="w-full md:h-[700px]">
                        <embed width={'95%'} height={'100%'} src="https://www.youtube.com/embed/Cs-7dLsjG9Q" type="" />
                        </div>  
                      <div className='w-2/5 justify-between bg-white flex-shrink items-center p-5'>
                       <div className='w-full '>
                        <img src={sideImg} alt="" />
                       </div>
                       <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-3'>EVE’S ESSENCE</h1>
                        <p className='my-5'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis libero placerat cursus cursus. Nunc rutrum tellus a orci pretium sodales. Fusce ante odio, tristique at urna sed, condimentum ornare eros.
                        </p>
                        <button className='bg-black text-white px-8 py-2'>Shop Now</button>
                       </div>
                        </div>  
                </div>
               </Container>
             </div>
        );
};

export default WatchShop;