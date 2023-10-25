import './About.css'
import about1 from '../../assets/about1.1.webp'
import about2 from '../../assets/about1.2.webp'

const AboutUs = () => {
        return (
                <>
                <div className='max-w-[1520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 md:flex justify-between items-center mt-20'>
                        <div>
                                <h1 className='text-4xl font-semibold mb-4'>Our Story</h1>
                                
                                <div>

                                <h4 className='about-subtitle'>THE HIGH STRESS FAVOUTIRE</h4>
                                </div>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum consequuntur earum assumenda. <br /> Eum dolores soluta ratione tenetur laboriosam repellendus.</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum consequuntur earum assumenda. <br /> Eum dolores soluta ratione tenetur laboriosam repellendus.</p>
                        </div>
                        <div>
                                <img src={about1} alt="" />
                        </div>
                </div>
                        <div className='max-w-[1520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 md:flex justify-between items-center mt-20'>
                        <div>
                                <img src={about2} alt="" />
                        </div>
                        <div>
                                <h1 className='text-4xl font-semibold mb-4'>Who We Are ?</h1>
                                
                                <div>

                                <h4 className='about-subtitle'>THE HIGH STRESS FAVOUTIRE</h4>
                                </div>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum consequuntur earum assumenda. <br /> Eum dolores soluta ratione tenetur laboriosam repellendus.</p>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum consequuntur earum assumenda. <br /> Eum dolores soluta ratione tenetur laboriosam repellendus.</p>
                        </div>
                        
                </div>
                </>
        );
};

export default AboutUs;