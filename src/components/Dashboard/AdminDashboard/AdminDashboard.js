import React from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div class="admin-dashboard">
           <div class="d-flex flex-column p-3 text-white bg-dark" style={{width: "400px",height:"950px"}}>
  <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
    <span class="fs-4">Plumbing Masters Admin Dashboard</span>
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
      <a href="/adminorders" class="nav-link text-white"> 
        Orders
      </a>
    </li>
    <li>
      <a href="/serviceupload" class="nav-link text-white">
        Service Upload
      </a>
    </li>
    <li>
      <a href="/adminupload" class="nav-link text-white">
        Add Admin
      </a>
    </li>
    <li>
      <a href="/manageservices" class="nav-link text-white">
        Manage Services
      </a>
    </li>
  </ul>
</div> 
        </div>
    );
};

export default AdminDashboard;