import './Gallery.css'

import galleryImg1 from '../../assets/instagram1.webp'
import galleryImg2 from '../../assets/instagram2.webp'
import galleryImg3 from '../../assets/instagram3.webp'
import galleryImg4 from '../../assets/instagram4.webp'
import galleryImg5 from '../../assets/instagram5.webp'
import galleryImg6 from '../../assets/instagram6.webp'
import galleryImg7 from '../../assets/instagram7.webp'

const Gallery = () => {
  return (
    <div className="grid grid-cols-5 mt-20">
      
      <div className='row-span-3 col-span-2 overflow-hidden relative transition  transform main-div'>
      <div className=""><img className='hover-img duration-500 w-full' src={galleryImg1} alt="" /></div>
      <div className="text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[50%] text-2xl">Porsche 911 Carrera</h1>
          </div>
      </div>

      <div className='overflow-hidden relative transition  transform main-div'>
      <div className=''><img className='hover-img duration-500' src={galleryImg2} alt="" /></div>
      <div className="text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Porsche 911 Carrera</h1>
          </div>
      </div>
      <div className='overflow-hidden relative transition  transform main-div'>
      <div><img className='hover-img duration-500' src={galleryImg3} alt="" /></div>
      <div className="text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Porsche 911 Carrera</h1>
          </div>
      </div>
      <div className='overflow-hidden relative transition  transform main-div'>
      <div><img className='hover-img duration-500' src={galleryImg4} alt="" /></div>
      <div className="text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Porsche 911 Carrera</h1>
          </div>
      </div>
      <div className='overflow-hidden relative transition  transform main-div'>
      <div><img className='hover-img duration-500' src={galleryImg5} alt="" /></div>
      <div className="text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Porsche 911 Carrera</h1>
          </div>
      </div>
      <div className='overflow-hidden relative transition  transform main-div'>
      <div><img className='hover-img duration-500' src={galleryImg6} alt="" /></div>
      <div className="text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Porsche 911 Carrera</h1>
          </div>
      </div>
      <div className='overflow-hidden relative transition  transform main-div'>
      <div><img className='hover-img duration-500' src={galleryImg7} alt="" /></div>
      <div className="text-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-white absolute inset-0 transition-opacity duration-200">
            <h1 className="mt-[30%] text-2xl">Porsche 911 Carrera</h1>
          </div>
      </div>
      
    </div>
  );
};

export default Gallery;
