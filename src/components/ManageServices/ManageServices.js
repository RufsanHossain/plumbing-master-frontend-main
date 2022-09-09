import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ManageServices.css";

const ManageServices = () => {
    const [ services , setServices] = useState([]);
    useEffect(()=>{
      const url = `https://stark-savannah-16317.herokuapp.com/showservices`;
         fetch(url)
         .then(res => res.json())
         .then(data => setServices(data))
      },[])

      const handleDelete = (id) =>{

        fetch('https://stark-savannah-16317.herokuapp.com/delete/' + id,{
           method: "DELETE"
       })
       .then(res => res.json())
       .then(data =>{
             alert("successfully deleted");
       })
    }

    return (
        <div>
            <div class="text-center div-design">
                <h1>Manage Services</h1>
            </div>
            <div class="p-5">
                    <table class="table table-striped">
                        <thead>
                            <tr class="Row-design">
                                <th scope="col ">Service</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                                {
                                    services.map((service, index)=>
                                    <tr class="mb-5">
                                        <td>{service.Name}</td>
                                        <td>{service.Cost}</td>
                                        <td><Link to="/"><button class="service-ebtn-design" onClick={() => handleDelete(service._id)}>Delete</button></Link></td>
                                    </tr>
                                    
                                    )
                                }    
                        </tbody>
                    </table>
                </div>
        </div>
    );
};

export default ManageServices;