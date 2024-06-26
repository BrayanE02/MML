import axios from "axios";
import UserDataService from "./UserDataService";

export async function logIn(username, password){
    var url = `/users`;
    var loggedIn = false;
    try {
        const responce = await UserDataService.get(url);
        loggedIn = tryLogin(responce.data, username, password);
        console.log(loggedIn);
    } catch (error) {
        console.log(error);
    }
    console.log(loggedIn)
    return loggedIn;
}

export async function addUser(firstname, lastname, email, username, password){
    var url = `http://localhost:5050/addUser`;
    try {
        const responce = await axios.post(url, {
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            Username: username,
            Password: password
        });
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
    return false;
}
export async function addToList(UserID, MovieID, Rating, Watchlist){
    var url = `http://localhost:5050/addToList`;
    try {
        const responce = await axios.post(url, {
            userID: UserID,
            movieID: MovieID,
            watched: Rating,
            rating: Watchlist
        });
        console.log(responce);
        return(responce);
    } catch (error) {
        console.log(error);
    }
    return false;
}

export async function removeFromList(MovieID){
    var url = `http://localhost:5050/removeFromList/${MovieID}`;
    try {
        const res = await axios.delete(url, {
            somethingElse: MovieID,
        });
        if(res.status == 200){
            return true;
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}

async function tryLogin(res, username, password){
    
    for (let i = 0; i < res.length; i++){
        if(res[i].Username == username && res[i].Password == password){
            return res[i];
        }
    }
    return [];
}