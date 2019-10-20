class User {


    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    getUsername(){return this.username}
    getEmail(){return this.email}
    getPassword(){return this.password}
   

}

// function setlocal(utilisateur){
// 	localStorage.setItem("user", JSON.stringify(utilisateur));
// }

// function getlocal(utilisateur){
// 	localStorage.getItem("user", JSON.parse(utilisateur));
// }

