import "../css/Login.css"
import { useState } from "react";
import * as UserDAO from "../services/UsersService"
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
    // Set up our hooks values
    const [hookUsername, setHookUsername] = useState("");
    const [hookPassword, setHookPassword] = useState("");
    const [hookEmail, setHookEmail] = useState("");
    const [hookFName, setHookFName] = useState("");
    const [hookLName, setHookLName] = useState("");

    //error hooks
    const [PWPass, setHookPWPass] = useState(true);

    //make update functions for our hooks
    const updateUsername = (event) =>{
        setHookUsername(event.target.value);
    }
    const updatePassword = (event) =>{
        setHookPassword(event.target.value);
    }
    const updateEmail = (event) =>{
        setHookEmail(event.target.value);
    }
    const updateFName = (event) =>{
        setHookFName(event.target.value);
    }
    const updateLName = (event) =>{
        setHookLName(event.target.value);
    }
    


    //Handle a login submit
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        //test if the PW is valid
        
        //this regex test for 6 char length, one uppercase, one lowercase and one number
        //also symbol are allowed, but not required
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/;
        var didPass = pattern.test(hookPassword);

        //if we passed the regex then add the user
        if(didPass){
            await UserDAO.addUser(hookFName, hookLName, hookEmail, hookUsername, hookPassword);
            navigate('/login')
        }
        //if we didn't pass the test set our var hook for diplaying an error to true
        else{
            setHookPWPass(false);
        }
    }

    return (
    <div className="divLogin">
        <h1>Welcome to My Movie List</h1>
        <h5>Please sign up below</h5>
        <form onSubmit={handleRegisterSubmit}>
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
                    id="Password"
                    value={hookPassword}
                    required
                    minLength={6}
                />
                <p className="PWerror" 
                // either show or hide the password error based on if the password passed or not
                style={PWPass? {opacity: 0}: {opacity: 100}}
                >Must be 6 characters Long, have 1 uppercase letter, 1 lowercase letter, and 1 number. </p>
            </div>
            <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                    Email
                </label>
                <input
                    onChange={updateEmail}
                    type="email"
                    className="form-control"
                    id="Email"
                    value={hookEmail}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="FName" className="form-label">
                    First Name
                </label>
                <input
                    onChange={updateFName}
                    type="text"
                    className="form-control"
                    id="FName"
                    value={hookFName}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="LName" className="form-label">
                    Last Name
                </label>
                <input
                    onChange={updateLName}
                    type="text"
                    className="form-control"
                    id="LName"
                    value={hookLName}
                    required
                />
            </div>
            
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
        <div className="link" >
            <a href="/login" style={{ color: "black"}}>Existing User? Login Here</a>
        </div>
    </div>);
}

export default Register;