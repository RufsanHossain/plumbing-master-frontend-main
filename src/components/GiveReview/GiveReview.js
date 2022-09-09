import React from 'react';
import { useForm } from "react-hook-form";

const GiveReview = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {

        const reviewData = {
            Name: data.Name,
            Review: data.Review,
            Date: new Date()
        };
        document.getElementById("Name").value="";
        document.getElementById("Review").value="";


        const url = `https://stark-savannah-16317.herokuapp.com/reviewsUpload`;

        fetch(url,{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(reviewData)
        })
       };

    return (
        <div className="product-submit d-flex justify-content-center text-center bg-design">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Give us a Review</h2>
                        
                <input name="Name" placeholder="Name" id="Name" {...register('Name', { required: true, maxLength: 30 })}/>
                    <br></br>
                <input name="Review" placeholder="Review" id="Review" {...register('Review', { required: true})}/>
                    <br></br>
                <input id="submit_btn" type="submit" />
             </form>
        </div>
    );
};

export default GiveReview;