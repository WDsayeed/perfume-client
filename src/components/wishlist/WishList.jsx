
import  { useEffect, useState } from 'react';
import SingleWishList from './SingleWishList';
import Swal from 'sweetalert2';

const WishList = () => {

        const [wishListData, setWishList] = useState([])



        useEffect(()=>{
                fetch('http://localhost:5000/allWishList')
                .then(res=> res.json())
                .then(data=> {
                        console.log(data)
                        setWishList(data)
                })
        }, [])
        
        const handleDeleteItem = (id) => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    fetch(`http://localhost:5000/allWishList/${id}`, {
                      method: "DELETE",
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                                const remainingData = wishListData.filter(data=> data._id !==id)
                          setWishList(remainingData);
                        }
                      });
                  }
                });
              }
        return (

                <div className='bg-[#C8E4B2]'>
    <div className=' grid md:grid-cols-2 mx-auto w-[70%] gap-x-24  py-10 pt-32'>
                        {
                                wishListData.map(wishData=> <SingleWishList
                                key={wishData._id}
                                        wishData={wishData}
                                        handleDeleteItem={handleDeleteItem}
                                ></SingleWishList>)
                        }
                </div>
                </div>
                     
               
               
        );
};

export default WishList;