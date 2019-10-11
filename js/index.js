window.onload = function() {


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
    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->



var signup = document.querySelectorAll(".square-button-empty");

for (var i= 0; i<signup.length; i++){

signup[i].onclick = function(e){
    var regist = document.querySelector("#register-form");
    var con = document.querySelector("#connexion-form");


    // con.style.display = "none";
    // regist.style.display ="flex";



if(e.target.getAttribute("data-form") == 0){
    con.style.display = "none";
    regist.style.display ="flex";
}

else if (e.target.getAttribute("data-form") != 0) {
    con.style.display = "flex";
    regist.style.display ="none";
}
}
}




    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)




// var prem = document.querySelector("#premier");
// var deux = document.querySelector("#deuxieme");
// var square = document.querySelectorAll(".square-button");



// var info = document.querySelectorAll(".form-control");

// function recup(info){


// for(v=0; v<info.length; v++){
//  var valeur = info[v].value;


// console.log(valeur);
// }
// }

// prem.onclick = recup(info);

// }





var pass = document.getElementsByTagName("password");

for (c = 0; c<pass.length; c++){
    var valpass = pass[c].value;
    var code = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if(valpass.match(code)){
        return true;
    }
    else{
        return false;
    }
}


var prem = document.querySelector("#premier");
var deux = document.querySelector("#deuxieme");
var square = document.querySelectorAll(".square-button");
var info = document.querySelectorAll(".form-control");
var input = document.getElementsByTagName("input");
var square = document.querySelectorAll(".square-button")
var info = document.querySelectorAll(".form-control");



prem.onclick = function(event){

var square = document.querySelectorAll(".square-button")
var info = document.querySelectorAll(".form-control");


for(v=0; v<info.length; v++){

var valeur = info[v].value;

var form = document.getElementById("register-form")


console.log(valeur);

}

}









deux.onclick = function(event){


var form = document.getElementById("register-form")
var username1 = form[0].value;
const utilisateur = new User(username1, email1, password1);

var email1 = form[1].value;
var password1 = form[2].value;


 
console.log('Bonjour ' + utilisateur.getUsername() + utilisateur.getEmail() + utilisateur.getPassword() + ' !');
}


localStorage.setItem("user",
    JSON.stringify(user))


    // --------------------- STEP 3 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A L'INSCRIPTION :

            // 1. le code commenter ci-dessous devras etre fonctionnelle (pour ça vous allez devoir déclarer une class 'User' -> POO Javascript)
                // cette classe devras avoir des les propriétés 'username', 'email', 'password' ainsi qu'une methode nommé 'getUsername' --->
                // --> qui devra retourner l'username de l'instance courante de 'User'

                // var user = new User('Toto (username)', 'toto@email.fr (email)', 'tamereenslip (password)');
                // console.log('Bonjour ' + user.getUsername() + ' !');


            // 2. Modifier ensuite le code ci dessus pour qu'a l'instantation d'un nouvelle 'User' ---
            // --> on utilise les données saisie du formulaire d'inscription pour setup les propriétés notre nouvelle 'User'
            // puis on stocke ce nouvelle objet utilisateurs dans le 'localStorage' sous la clé 'user'

// creer un autre fichier JS , et linker dnas le HTML avant l'autre link





// const utilisateur = new User(input.username);

// console.log(utilisateur.getUsername());


    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'

}