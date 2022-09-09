import React from 'react';
import './Member.css';

const Member = (props) => {
    //console.log(props);
    const {Name,imageURL,Comment}=props.TeamData;
    return (
        <section class="col-md-4">
          
                    <div>
                        <div  class="p-3 text-center member-card" style={{border:"2px solid #FCC000"}}>
                            <img style={{height:"300px"}} class="img-fluid rounded w-100 mb-3" src={imageURL} alt=""></img>    
                            <h3 style={{fontWeight:"700"}}>{Name}</h3>
                            <h5 style={{fontWeight:"500"}}>Designation :</h5>
                            <p style={{fontWeight:"500"}}>{Comment}</p>
                            <div class="d-flex flex-row justify-content-center">
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div class="p-4">
                                    <a href="#">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
        </section>
    );
};

export default Member;