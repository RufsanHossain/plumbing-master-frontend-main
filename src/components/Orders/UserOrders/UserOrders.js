import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import "./UserOrders.css";

const UserOrders = () => {
    const { value, value2 } = React.useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [buyProduct, setbuyProduct] = value2;

    const [ orders , setOrders] = useState([]);
    useEffect(()=>{
      const url = `https://stark-savannah-16317.herokuapp.com/showorders`;
         fetch(url)
         .then(res => res.json())
         .then(data => setOrders(data))
      },[])
       //console.log(orders);
       const useremail = sessionStorage.getItem("token");
      const userOrder = orders.find(order=> order.email === useremail )
      console.log(userOrder)
    return (
        <div>
            <div class="text-center div-design">
                <h1>Your Orders</h1>
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
                            userOrder?<tr>
                                <td>{userOrder.Name}</td>
                                <td>{userOrder.Cost}</td>
                                <td>{userOrder.email}</td>
                                <td>{userOrder.status}</td>
                            </tr>
                            :
                            <tr>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                                <td>N/A</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
                   
        </div>
    );
};

export default UserOrders;