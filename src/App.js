import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Home from './components/Home/Home';
import AdminUpload from './components/AdminUpload/AdminUpload';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import { createContext } from 'react';
import { useState } from 'react';
import Checkout from './components/Home/Services/Checkout/Checkout';
import ServiceUpload from './components/ServiceUpload/ServiceUpload';
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard/UserDashboard';
import Dashboard from './components/Dashboard/Dashboard';
import GiveReview from './components/GiveReview/GiveReview';
import AdminOrders from './components/Orders/AdminOrders/AdminOrders';
import UserOrders from './components/Orders/UserOrders/UserOrders';
import ManageServices from './components/ManageServices/ManageServices';
import Footer from './components/Home/Footer/Footer';
import Navbar from './components/Home/Header/Navbar/Navbar';
import Notfound from './components/NotFound/Notfound';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [buyService, setbuyService] = useState({});
  return (
    <UserContext.Provider value = {{value :[loggedInUser, setLoggedInUser], value2 :[buyService, setbuyService]}}>
      <Router>
        <Switch>
          <Route path="/home">
               <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/adminupload">
            <Navbar></Navbar>
            <AdminUpload></AdminUpload>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/checkout">
            <Navbar></Navbar>
            <Checkout></Checkout>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/serviceupload">
            <Navbar></Navbar>
            <ServiceUpload></ServiceUpload>
            <Footer></Footer>
          </PrivateRoute>
          <Route exact path="/">
               <Home></Home>
          </Route>
          <PrivateRoute path="/admindashboard">
            <Navbar></Navbar>
            <AdminDashboard></AdminDashboard>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/userdashboard">
            <Navbar></Navbar>
            <UserDashboard></UserDashboard>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Navbar></Navbar>
            <Dashboard></Dashboard>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/givereviews">
            <Navbar></Navbar>
            <GiveReview></GiveReview>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/adminorders">
            <Navbar></Navbar>
            <AdminOrders></AdminOrders>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/userorders">
            <Navbar></Navbar>
            <UserOrders></UserOrders>
            <Footer></Footer>
          </PrivateRoute>
          <PrivateRoute path="/manageservices">
            <Navbar></Navbar>
            <ManageServices></ManageServices>
            <Footer></Footer>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
    </Router>

    </UserContext.Provider>

    
  );
}

export default App;
