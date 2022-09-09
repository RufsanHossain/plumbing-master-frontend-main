import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import UserDashboard from './UserDashboard/UserDashboard';

const Dashboard = () => {
    const [ admins , setAdmins] = useState([]);
    const { value, value2 } = React.useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [buyService, setbuyService] = value2;
    const useremail = sessionStorage.getItem("token");
    
    useEffect(()=>{
        const url = `https://stark-savannah-16317.herokuapp.com/showadmins`;
           fetch(url)
           .then(res => res.json())
           .then(data => setAdmins(data))

        },[])
       const user = admins.find(admin => admin.Email===useremail);
    return (
        <div>
            {
                user ?<AdminDashboard></AdminDashboard>:<UserDashboard></UserDashboard>
            }
        </div>
    );
};

export default Dashboard;