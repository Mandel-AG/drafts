window.onload = function() {

    $("#AbonnementsContainer #Switch h3").on("click", function(){

        if ($("#Premium").css ("display")==="none"){
            $("#Premium").css("display", "flex"); 
            $("#Basic").css("display", "none"); 
            $("#Switch h3").text("Cliquez pour l'abonnement Basic - 7€/mois"); 
        }
        else{
            $("#Basic").css("display", "flex");
            $("#Premium").css("display", "none"); 
            $("#Switch h3").text("Cliquez pour l'abonnement Premium - 11€/mois")
        }
    })

    $('[data-toggle="tooltip"]').tooltip(); 

    $("#HeaderContainer img, #HeaderContainer #LogIn").on("click", function(){
        window.location.href = "index.html"
    })


    // $("#LogIn").mouseover(function(){
    //     $(this).addClass("border"); 
    // })

    // $("#LogIn").mouseleave(function(){
    //     $(this).removeClass("border"); 
    // })

    const submitBasic = document.getElementById("BoutonBasic"); 
    const basicForm = document.getElementById("BasicFormulaire"); 
    const submitPremium = document.getElementById("BoutonPremium"); 
    const premiumForm = document.getElementById("PremiumFormulaire"); 

    submitBasic.addEventListener("click", function(event){
            event.preventDefault(); 
            let username = basicForm[3].value; // let username = $(" id de l'input").val()
            console.log(username); 
            
            let email = basicForm[4].value; 
            console.log(email); 

            let password = basicForm[5].value; 
            console.log(password);

            let verifPassword = basicForm[6].value; 
            console.log(verifPassword);

            $.post("https://brianboudrioux.fr/simplon/api/users", {username : username, email : email, password : password}, function(data, status){ 
                console.log(typeof data.errors); 
                if (typeof data.errors == "undefined")
                    window.location.href = "index.html"
                else
                console.log(data.errors) });
        })

        
    submitPremium.addEventListener("click", function(event){
            event.preventDefault();
            let username2 = premiumForm[3].value; 
            console.log(username2); 
                    
            let email2 = premiumForm[4].value; 
            console.log(email2); 
        
            let password2 = premiumForm[5].value; 
            console.log(password2);
        
            let verifPassword2 = premiumForm[6].value; 
            console.log(verifPassword2); 


            $.post("https://brianboudrioux.fr/simplon/api/users", {username : username, email : email, password : password}, function(data){ 
                // console.log(data)  
                console.log(typeof data.errors); 
                if (typeof data.errors == "undefined")
                        window.location.href = "index.html"
                else
                    console.log(data.errors) });
        })
    
    
    }
