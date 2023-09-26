import { useEffect, useState } from 'react';
import BestPerfume from './BestPerfume';
import Modal from '../Modal/Modal';

const BestSelPerfume = () => {
        const [bestPerfumes, setBestPerfumes] = useState([])
        const [selectedPerfume, setSelectedPerfume] = useState({});  
        const [id, setId] = useState('')
        useEffect(()=>{
                fetch('http://localhost:5000/bestPerfume')
                .then(res=> res.json())
                .then(data=> setBestPerfumes(data))
        },[])

        useEffect(()=>{
                fetch(`http://localhost:5000/bestPerfume/${id}`)
                .then(res=> res.json())
                .then(data=> setSelectedPerfume(data))
        },[id])

 
        return (
                <div className='mt-24'>
                        <h1 className='text-center font-semibold text-3xl'>Best Seller</h1>
                        <h3 className='text-center'>Best Seller Product This Week!</h3>
                     <div className='md:grid grid-cols-4 gap-10 mt-10'>
                     {
                        bestPerfumes.map(perfume=> <BestPerfume
                        key={perfume._id}
                        perfume={perfume}
                        setId={setId}
                        ></BestPerfume>)
                     }  
                        </div> 
                        
                        <Modal selectedPerfume={selectedPerfume}></Modal>
                       
                </div>
        );
};

export default BestSelPerfume;