import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./AdminOrders.css";

const AdminOrders = () => {
    const [ orders , setOrders] = useState([]);
    useEffect(()=>{
      const url = `https://stark-savannah-16317.herokuapp.com/showorders`;
         fetch(url)
         .then(res => res.json())
         .then(data => setOrders(data))
      },[])

    const handleUpdate =(id)=>{
               fetch(`https://stark-savannah-16317.herokuapp.com/updateorder/${id}`)
               .then(res => res.json())
               .then(data => console.log(data))
    }

    return (
        <div>
            <div class="text-center div-design">
                <h1>All Orders</h1>
            </div>
               
                <div class="p-5">
                    <table class="table table-striped">
                        <thead>
                            <tr class="Row-design">
                                <th scope="col">Service</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Order By</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    orders.map((order, index)=>
                                    <tr>
                                        <td>{order.Name}</td>
                                        <td>{order.Cost}</td>
                                        <td>{order.email}</td>
                                        <td>{order.status}<button class="service-btn-design" onClick={() => handleUpdate(order._id)}> Update </button></td>
                                    </tr>
                                    
                                    )
                                }    
                        </tbody>
                    </table>
                </div>
            
        </div>
    );
};

export default AdminOrders;