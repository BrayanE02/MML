import "../css/Login.css"
import { useState } from "react";

function Login() {

    // Set up our hooks values
    const [hookUsername, setHookUsername] = useState("");
    const [hookPassword, setHookPassword] = useState("");

    //make update functions for our hooks
    const updateUsername = (event) =>{
        setHookUsername(event.target.value);
    }
    const updatePassword = (event) =>{
        setHookPassword(event.target.value);
    }


    //Handle a login submit
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Login Submit: ", hookUsername, hookPassword);
    }

    return (
    <div className="divLogin">
        <h1 className="classh1">Welcome Back to My Movie List</h1>
        <form onSubmit={handleLoginSubmit}>
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
                    id="exampleInputPassword1"
                    value={hookPassword}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
        <div className="link">
            <a href="/register">New User? Register Here</a>
        </div>
    </div>);
}

export default Login;