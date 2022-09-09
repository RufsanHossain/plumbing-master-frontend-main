import React from 'react';
import { useForm } from "react-hook-form";
import "./ServiceUpload.css";

const ServiceUpload = () => {
    const { register, handleSubmit, watch, errors } = useForm();

     const onSubmit = data => {

         const productData = {
             Name: data.ServiceName,
             Description: data.Description,
             Cost: data.Cost
         };
         document.getElementById("ServiceName").value="";
         document.getElementById("Description").value="";
         document.getElementById("Cost").value="";


         const url = `https://stark-savannah-16317.herokuapp.com/servicesUpload`;

         fetch(url,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(productData)
         })
        };

    return (
        <div className="product-submit d-flex justify-content-center text-center bg-design">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Services Upload</h2>
                        
                <input name="ServiceName" placeholder="ServiceName" id="ServiceName" {...register('ServiceName', { required: true, maxLength: 30 })}/>
                    <br></br>
                <input name="Description" placeholder="Description" id="Description" {...register('Description', { required: true})}/>
                    <br></br>
                <input name="Cost" placeholder="Cost" type="number" id="Cost" {...register('Cost', { required: true })} />
                    <br></br>
                <input id="submit_btn" type="submit" />
             </form>
        </div>
    );
};

export default ServiceUpload;