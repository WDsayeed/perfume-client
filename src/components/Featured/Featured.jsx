import UnderLine from '../UnderLine/UnderLine';
import './Featured.css'
import { HiGlobeAlt, HiCubeTransparent, HiHomeModern } from "react-icons/hi2";

const Featured = () => {
        return (
                <div className="featured bg-fixed text-white md:flex justify-around py-44 my-16">
                        <div className=' flex flex-col items-center justify-center'>
                                {/* <img className='text-white w-20 h-20' src={design} alt="" /> */}
                                <HiGlobeAlt className='w-20 h-20'></HiGlobeAlt>
                                <h1 className='text-4xl font-semibold'>Design</h1>
                                <div className='mb-5'><UnderLine></UnderLine></div>
                                <p>Lorem ipsum dolor, sit amet consectetur </p>
                                <p>Lorem ipsum dolor, sit  </p>
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                        <HiCubeTransparent className='w-20 h-20'></HiCubeTransparent>
                                <h1 className='text-4xl font-semibold'>inovation</h1>
                                <div className='mb-5'><UnderLine></UnderLine></div>
                                <p>Lorem ipsum dolor, sit amet consectetur </p>
                                <p>Lorem ipsum dolor, sit  </p>
                        </div>
                        <div className=' flex flex-col items-center justify-center'>
                        <HiHomeModern className='w-20 h-20'></HiHomeModern>
                                <h1 className='text-4xl font-semibold'>journey</h1>
                                <div className='mb-5'><UnderLine></UnderLine></div>
                                <p>Lorem ipsum dolor, sit amet consectetur </p>
                                <p>Lorem ipsum dolor, sit </p>
                        </div>
                </div>
        );
};

export default Featured;