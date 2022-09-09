import React from 'react';
import "./UserDashboard.css";

const UserDashboard = () => {
    return (
        <div class="user-dashboard">
        <div>
           <div class="d-flex flex-column p-3 text-white bg-dark" style={{width: "400px",height:"950px"}}>
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <span class="fs-4">Plumbing Masters User Dashboard</span>
  </a>
  <hr/>
  <ul class="nav nav-pills flex-column mb-auto">
    <li class="nav-item">
      <a href="/dashboard" class="nav-link active">
        Dashboard
      </a>
    </li>
    <li>
      <a href="/" class="nav-link text-white">
        Home
      </a>
    </li>
    <li>
      <a href="/givereviews" class="nav-link text-white">
        Give Review
      </a>
    </li>
    <li>
      <a href="/userorders" class="nav-link text-white">
        Orders
      </a>
    </li>
   
  </ul>
</div> 
        </div>
        </div>
    );
};

export default UserDashboard;