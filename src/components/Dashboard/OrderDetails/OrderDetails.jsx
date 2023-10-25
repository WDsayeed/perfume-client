import React, { useEffect, useState } from 'react';

const OrderDetails = () => {

        const [orderDetails, setOrderDetails] = useState([])

        useEffect(() => {
                fetch('http://localhost:5000/orderDetails')
                        .then(res => res.json())
                        .then(data => {
                                console.log(data)
                                setOrderDetails(data)
                        })
        }, [])
        return (
                <div className="overflow-x-auto">
                        <h1 className='text-center font-semibold text-4xl'>Order Details</h1>
  <table className="table mt-10">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Address</th>
        <th>Post Code</th>
        <th>Price</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
       {
          orderDetails.map((order, index)=>  <tr key={order._id} className="bg-base-200">
                  <th>{ index + 1}</th>
                  <td>{ order.order.name}</td>
                  <td>{ order.order.address}</td>
                  <td>{ order.order.postCode}</td>
                  <td>{ order.order.price}</td>
                  <td>{ order.paidStatus === true? 'true':'false'}</td>
        </tr>)                                      
        }
   
    </tbody>
  </table>
</div>
        );
};

export default OrderDetails;