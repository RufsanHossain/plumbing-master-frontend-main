import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import "./EachService.css";

const EachService = (props) => {
    const { value, value2 } = React.useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value;
    const [buyService, setbuyService] = value2;
    //console.log(buyService);
    const {Name, Description, Cost} = props.ServicesData;

    const handleBuyService = ()=>{
        setbuyService(props.ServicesData);
    }
     
    return (

        <div class="col-md-4 property">
            <h1>{Name}</h1>
            <p>{Description}</p>
            <h2>${Cost}</h2>
            <Link  to={"/checkout"}>
            <button class="btn btn-dark" onClick={handleBuyService}>Get Service</button>
            </Link>
        </div>

    );
};

export default EachService;