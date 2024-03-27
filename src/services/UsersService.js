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

async function tryLogin(res, username, password){
    
    for (let i = 0; i < res.length; i++){
        if(res[i].Username == username && res[i].Password == password){
            return res[i];
        }
    }
    return [];
}