window.onload = function() {

    $('[data-toggle="tooltip"]').tooltip(); 

    $("#Boutons #LogIn").on("click",function(){
        $("#Accroche, #LogIn, #SignUp").css("display", "none");
        $("#ContainerLogIn").css("display", "flex"); 
        $("#MainPage #line").css({"-webkit-transform":"translateY(40px)"})
    })

    $("#ContainerLogIn #Fermeture").on("click",function(){
        $("#ContainerLogIn").css("display", "none"); 
        $("#Accroche, #LogIn, #SignUp").css("display", "flex");
        $("#MainPage #line").css({"-webkit-transform":"translateY(0px)"})
    })

    $("#Boutons #SignUp").on("click",function(){
        $("#Accroche, #LogIn, #SignUp").css("display", "none");
        $("#ContainerAbonnement").css("display", "flex"); 
        $("#MainPage #line").css({"-webkit-transform":"translateY(52px)"})
    })

    $("#ContainerAbonnement #Fermeture2").on("click",function(){
        $("#ContainerAbonnement").css("display", "none"); 
        $("#Accroche, #LogIn, #SignUp").css("display", "flex");
        $("#MainPage #line").css({"-webkit-transform":"translateY(0px)"})
    })

    $(".Bouton").on("click", function(){
        window.location.href = "sign_up.html"; 
    })

    // Requête get Teaser : 

    $.get("https://brianboudrioux.fr/simplon/api/products/5dc00d241192ac774b019fed", function(data, status) {
        console.log(data.media);
        $("#teaser1").attr("src", data.media)});

    $.get("https://brianboudrioux.fr/simplon/api/products/5dc00df61192ac774b019fef", function(data, status) {
        console.log(data.media);
        $("#teaser2").attr("src", data.media)});

    $.get("https://brianboudrioux.fr/simplon/api/products/5dc00f4b1192ac774b019ff0", function(data, status) {
        console.log(data.media);
        $("#teaser3").attr("src", data.media)});    

    $.get("https://brianboudrioux.fr/simplon/api/products/5dc002ec1192ac774b019fe4", function(data, status) {
        console.log(data.media);
        $("#teaser4").attr("src", data.media)});   

    // Requête post log in : 

    const logInForm = document.getElementById("typeForm");  
    const boutonLog = document.getElementById("BoutonLogIn");            
    

    boutonLog.addEventListener("click", function(event){
        event.preventDefault();

        let email = logInForm[0].value; 
            console.log(email); 

        let password = logInForm[1].value; 
            console.log(password);    
            

        $.post("https://brianboudrioux.fr/simplon/api/connect", { email: email, password: password}, function(data, status) {
            event.preventDefault();
            console.log(data);

            if (data.auth == true){

                localStorage.setItem("email", email)
                window.location.href = "sign_up.html"; }

            else {
                alert('Compte inexistant, veuillez recommencer');}
        })
    })
}
