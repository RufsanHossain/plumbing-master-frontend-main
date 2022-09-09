import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Member from '../Member/Member';
const TeamData = () => {
    const [ admins , setAdmins] = useState([])
    useEffect(()=>{
        const url = `https://stark-savannah-16317.herokuapp.com/showadmins`;
           fetch(url)
           .then(res => res.json())
           .then(data => setAdmins(data))
        },[])
    return (
        <div class="container-fluid bg-light">
            <div class="container mt-5">
            <div>
              <h1 class="text-center mt-5 mb-5 serviceheading">Our Team</h1>
            </div>
            <div class="row">
            {
                admins.map(TeamData => <Member TeamData={TeamData} key={TeamData._id}> </Member>)
            }
            </div>
        </div>
        </div>
    );
};

export default TeamData;