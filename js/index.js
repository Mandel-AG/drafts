window.onload = function (){

    // --------------------- STEP 1 ---------------------
        // Par defaut le formulaire de connection est afficher, le formulaire d'inscription quand a lui est en 'display: none';
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button-empty'
            // DE MASQUER LE LOGIN FORM POUR AFFICHER LE REGISTER FORM, ET INVERSEMENT <->




var signup = document.querySelectorAll(".square-button-empty");
var connexion = document.querySelector("#connexion-form")
var register = document.querySelector("#register-form")
for(var i = 0; i<signup.length; i++){
signup[i].onclick = function(e){

    

        if(e.target.getAttribute("data-form") == 0){
            connexion.style.display = "none";
            register.style.display = "flex";

        }

        else {
            connexion.style.display = "flex";
            register.style.display = "none";
        }





    }}








    // --------------------- STEP 2 ----------------------
        // maintenant que l'on peut afficher nos 2 formulaires l'intéret serait maintenant qu'ils fonctionnent ! pour cela :
        // FAITE EN SORTE QUE AU CLICK SUR LES BUTTONS POSSEDANT LA CLASS 'square-button' DE :
            //  1. récuperer la valeur de tout les champs de formulaires
            //  2. vérifier que le 'username' fait au moins 5 caracteres alphanumérique
            //  3. vérifier que le password fait au moins 8 caracteres et contient a minima une majuscule/minuscule ainsi qu'un entier (integer)


            var login = document.querySelector("#premier")
            var signup2 = document.querySelector("#deuxieme")
            var logsign = document.querySelectorAll(".square-button")
            var get = localStorage.getItem("user");
            var parseget = JSON.parse(get);
            


    login.onclick = function(event){
        let passwordlog = connexion[1].value;
        let emaillog = connexion[0].value;
        var passlog = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

        


        if (passlog.test(passwordlog)==false){
        alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un nombre entier")
}

        if(get == null){
            alert("account do not exist, please register")
        }

        if(parseget.email == emaillog && parseget.password == passwordlog){
            document.location.href="C:/wamp64/www/JavascriptMe/home.html";
        }
            else{
                alert("account do not exist, please register")

            
        }
        
            

            



           
        console.log(emaillog, passwordlog)
}




    signup2.onclick = function(event){
        let username = register[0].value;
        let emailreg = register[1].value
        let passwordreg = register[2].value;
        let passconf = register[3].value;
        let passreg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
        const utilisateur = new User(register[0].value,register[1].value,register[2].value)
        var set = localStorage.setItem("user", JSON.stringify(utilisateur));

    
        var erreur = document.querySelector(".mdp")
        var div = document.createElement("div")
        var text = document.createTextNode("Les mots de passe ne sont pas identiques!")
        div.appendChild(text); 


        div.style.display = "inline-block";


        if(passreg.test(passwordreg)==false){
            alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un nombre entier")
        }


        if(passwordreg !== passconf){
            erreur.appendChild(div)
        }

        console.log("bonjour " + utilisateur.getUsername() + " " + utilisateur.getEmail() + " " + utilisateur.getPassword())
        
        



    
    }







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







    // --------------------- STEP 4 -------------------------
        // une fois nos saisies utilisateurs stocker dans des variables faite en sorte de :
        // A LA CONNEXION :

            // 1. Vérifier l'existance dans le 'localStorage' de la clé 'user'
                // 1.1 Si la clé 'user' n'existe pas, retourner un message d'erreur a l'utilisateurs (Account do not exist, please register.)
                // 1.2 Si la clé existe, comparer les données saisie a celle présente dans le 'localStorage'
                    // 1.2.1 si l'email ou le mot de passe ne correspondent pas, retourner un message d'erreur (les alert() sont proscrit)

            // 2. Si les données saisies correspondent a celles présentes dans le 'localStorage', rediriger l'utilisateur sur la page 'home.html'

}