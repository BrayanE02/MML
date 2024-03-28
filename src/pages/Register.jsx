import "../css/Login.css"
import { useState } from "react";

function Register() {

    // Set up our hooks values
    const [hookUsername, setHookUsername] = useState("");
    const [hookPassword, setHookPassword] = useState("");
    const [hookEmail, setHookEmail] = useState("");
    const [hookFName, setHookFName] = useState("");
    const [hookLName, setHookLName] = useState("");

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
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log("Register Submit: ", hookUsername, hookPassword, hookEmail, hookFName, hookLName);
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
                />
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
                />
            </div>
            
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
        <div className="link">
            <a href="/login">Existing User? Login Here</a>
        </div>
    </div>);
}

export default Register;