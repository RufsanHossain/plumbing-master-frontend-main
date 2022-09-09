import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import "./AdminUpload.css";

const AdminUpload = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageUrl] = useState({});

     const onSubmit = data => {

         const productData = {
             Name: data.Name,
             Email: data.Email,
             Comment: data.Comment,
             imageURL: imageURL   
         };
         document.getElementById("Name").value="";
         document.getElementById("Email").value="";
         document.getElementById("Comment").value="";


         const url = `http://localhost:5500/adminUpload`;

         fetch(url,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body: JSON.stringify(productData)
         })
        };
// image to third party api 
     const handleUploadImage = event =>{
          const imageData = new FormData();
          imageData.set('key','14e1f186a88d520f5aafe4ad5bf34cc7');
          imageData.append('image', event.target.files[0])
    // image post to third-party app

          axios.post('https://api.imgbb.com/1/upload',imageData)
          .then(function(response){
              setImageUrl(response.data.data.display_url);
          })
          .catch(function(error){
              console.log(error);
          });
     }


    return (
        <div className="product-submit d-flex justify-content-center text-center bg-design">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 class="mt-5 ">Add Admin or New Admin</h2>
                        
                <input name="Name" placeholder="Name" id="Name" {...register('Name', { required: true, maxLength: 30 })}/>
                    <br></br>
                <input name="Email" placeholder="Email" type="email" id="Email" {...register('Email', { required: true})}/>
                    <br></br>

                <input name="Comment" placeholder="Designation" id="Comment" {...register('Comment', { required: true, maxLength: 30 })} />
                <br></br>
                <label for="files"
                    className="upload-pic d-flex justify-content-center">Upload Picture</label>
                <input id="files" style={{visibility:"hidden"}} type="file" onChange={handleUploadImage} />
                    <br></br>
                <input class="mb-5" id="submit_btn" type="submit" />
             </form>
        </div>
    );
};

export default AdminUpload;