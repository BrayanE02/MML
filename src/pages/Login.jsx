import "../css/Login.css"
import { useState } from "react";
import * as UserDAO from "../services/UsersService"
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const navigate = useNavigate();
    // Set up our hooks values
    const [hookUsername, setHookUsername] = useState("");
    const [hookPassword, setHookPassword] = useState("");
    const [hookError, setHookError] = useState("");

    //check if our cookie is there
    let loggedin = false;
    if(props.userCook != undefined){
        loggedin = true;
    }
    console.log(loggedin);
    //make update functions for our hooks
    const updateUsername = (event) =>{
        setHookUsername(event.target.value);
    }
    const updatePassword = (event) =>{
        setHookPassword(event.target.value);
    }

    
    //Handle a login submit
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        //call the users DAO for logging in
        let res;
        res = await UserDAO.logIn(hookUsername, hookPassword);

        console.log("login request");
        console.log("results", res.data);

        //if re.id is defined, meaning we found a user
        if(res.ID){
            //clear username and pw
            res.Username = "";
            res.Password= "";
            //set our logged in user as the responce
            props.setLogin(res);
        }
        //if the user is not found
        else{
            //show error
            setHookError("Incorrect Login")
        }
        
        navigate('/MyList');
    }
    const handleLogout = () =>{
        console.log("out")
        props.deleteCookie();
    }

    return (
        !loggedin
        ?
    <div className="divLogin">
        <h1 className="classh1">Welcome Back to My Movie List</h1>
        <form onSubmit={handleLoginSubmit}>
            <h5 className="red-text">{hookError}</h5>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    onChange={updateUsername}
                    type="text"
                    className="form-control"
                    id="username"
                    aria-describedby="username"
                    value={hookUsername}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="Password" className="form-label">
                    Password
                </label>
                <input
                    onChange={updatePassword}
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={hookPassword}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
        <div className="link">
            <a href="/register" style={{ color: "black"}}>New User? Register Here</a>
        </div>
    </div>
    :
    <div className="divLogin">
        <h1 className="classh1">Sorry to see you go</h1>
        <form onSubmit={handleLogout}>
            <div className="logout-biv">
            <button type="submit" className="btn">
                Logout
            </button>
            </div> 
        </form>
    </div>
    );
}

export default Login;