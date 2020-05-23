$( document ).ready(function() {

  this.film = function (data) {
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div")
        var video = document.querySelector(".vidfilms")
        var img = document.createElement("img")
        video.append(div)
        div.append(img)
        $(img).attr({"src":data[i].picture,"alt":data[i].media, "width":"100%", "height":"100%"})
          $(img).click(function(){
              var lien = $(this).attr("alt")
              window.location.href= "./visionnage.html?lien="+lien;

          })
        }
    }


  this.serie = function(data){
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidseries")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture,"alt":data[i].media, "width":"100%", "height":"100%"})

      $(img).click(function(){
          var lien = $(this).attr("alt")
          window.location.href= "./visionnage.html?lien="+lien;

      })
    }
  }


  this.anime = function(data){
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div")
        var video = document.querySelector(".vidanimes")
        var img = document.createElement("img")
        video.append(div)
        div.append(img)
        $(img).attr({"src":data[i].picture,"alt":data[i].media, "width":"100%", "height":"100%"})

          $(img).click(function(){
              var lien = $(this).attr("alt")
              window.location.href= "./visionnage.html?lien="+lien;
          })
      }
  }


  this.realisateur= function(data){
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div")
      var video = document.querySelector(".vidrealisateurs")
      var img = document.createElement("img")
      video.append(div)
      div.append(img)
      $(img).attr({"src":data[i].picture,"alt":data[i].media, "width":"100%", "height":"100%"})

        $(img).click(function(){
            var lien = $(this).attr("alt")
            window.location.href= "./visionnage.html?lien="+lien;

        })
    }
  }

 that = this;





    $.get("https://brianboudrioux.fr/simplon/api/products/", function(data, test){    
    $(".vidfilms").text("")
      that.film(data)

      $("#categoriesfilms").addClass("selected")
  });


// $(".listecatégories li").mouseenter(function(){
//   $(this).css({"text-decoration-line":"line-through"});
//   })
// $(".listecatégories li").mouseleave(function(){
//   $(this).css("text-decoration-line","none");
// });


// $("#misora").mouseenter(function(){
//   $(this).css("border","none");
// });


$(".icone").click(function(){
	if($("#listeuser").css("display")=== "none")
	$("#listeuser").fadeIn("fast");

	else{
		$("#listeuser").fadeOut("fast");
	}
})



// cadres + videos + border

$("#categoriesfilms").click(function(){
   $("#cat").text("Films");
   $("#categoriesfilms a").addClass("selected")
   $("#categoriesseries, #categoriesanimes, #categoriesrealisateurs").removeClass("selected")
  if($(".middlefilms").css("display") === "none"){
    $(".middlefilms").fadeIn("slow").css("display","flex");
    $(".middleseries, .middleanimes, .middlerealisateurs").css("display","none");
      }
})

  

$("#categoriesseries").click(function(){
  $("#cat").text("Séries");
  $("#categoriesseries").addClass("selected")
   $("#categoriesfilms, #categoriesanimes, #categoriesrealisateurs").removeClass("selected")
  if($(".middleseries").css("display")==="none"){
    $(".middleseries").fadeIn("slow").css("display","flex");
    $(".middlefilms, .middleanimes, .middlerealisateurs").css("display","none");
  }

})



$("#categoriesanimes").click(function(){
   $("#cat").text("Animés");
   $("#categoriesanimes").addClass("selected")
   $("#categoriesseries, #categoriesfilms, #categoriesrealisateurs").removeClass("selected")
  if($(".middleanimes").css("display")==="none"){
    $(".middleanimes").fadeIn("slow").css("display","flex");
    $(".middlefilms, .middleseries, .middlerealisateurs").css("display","none");
  }
})



$("#categoriesrealisateurs").click(function(){
   $("#cat").text("Réalisateurs");
   $("#categoriesrealisateurs").addClass("selected")
   $("#categoriesseries, #categoriesanimes, #categoriesfilms").removeClass("selected")
  if($(".middlerealisateurs").css("display")==="none"){
    $(".middlerealisateurs").fadeIn("slow").css("display","flex");
    $(".middlefilms, .middleanimes, .middleseries").css("display","none");


  }
})



// images
$("#categoriesfilms").click(function(){
    
  $.get("https://brianboudrioux.fr/simplon/api/products/", function(data, test){    
    $(".vidfilms").text("")
    
      that.film(data)
  });
});



                // Dans films

$("#filmsaction").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc001b01192ac774b019fe2" , function(data, test){    $(".vidfilms").text("")

    that.film(data)
  })
});



$("#filmscomedie").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbeffb7cbd3166665f3a45b" , function(data, test){
    $(".vidfilms").text("")

   that.film(data)

  });
});


$("#filmshorreur").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0a3e6cb3406eba1ac77b" , function(data, test){    $(".vidfilms").text("")
   
    that.film(data)

  });
});


$("#filmsSF").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc002181192ac774b019fe3" , function(data, test){    
    $(".vidfilms").text("")
   
    that.film(data)

  });
});



  // series

$("#categoriesseries").click(function(){
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc002181192ac774b019fe3" , function(data, test){   
   $(".vidseries").text("")
   
    that.serie(data)

  });
});



$("#seriesaction").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc001b01192ac774b019fe2" , function(data, test){    
    $(".vidseries").text("")
   
    that.serie(data)
  });
});


$("#seriescomedie").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbeffb7cbd3166665f3a45b" , function(data, test){    
    $(".vidseries").text("")
   
    that.serie(data)

  });
});


$("#serieshorreur").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0a3e6cb3406eba1ac77b" , function(data, test){    
    $(".vidseries").text("")
   
    that.serie(data)

  });
});


$("#seriesSF").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0adc6cb3406eba1ac77d" , function(data, test){    
    $(".vidseries").text("")
   
    that.serie(data)

  });
});


    // Animes


  $("#categoriesanimes").click(function(){
    $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0c166cb3406eba1ac780" , function(data, test){
      $(".vidanimes").text("")
     
      that.anime(data)
    });
  });

  function funcline(){
    $(this).addClass("ligne")
    $(this).siblings("li").removeClass("ligne")
  }


  $("#animesaction").click(function(){
      $(this).addClass("ligne")
      $(this).siblings("li").removeClass("ligne")
      $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc001b01192ac774b019fe2" , function(data, test){
      $(".vidanimes").text("")
     
      that.anime(data)

    });
  });




$("#animesaventure").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
    $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0a9f6cb3406eba1ac77c" , function(data, test){
      $(".vidanimes").text("")
     
      that.anime(data)

    });
  });



$("#animescomedie").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
    $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbeffb7cbd3166665f3a45b" , function(data, test){
      $(".vidanimes").text("")
     
      that.anime(data)

    });
  });



$("#animesSF").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
    $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0adc6cb3406eba1ac77d" , function(data, test){
      $(".vidanimes").text("")
     
      that.anime(data)

    });
  });


$("#categoriesrealisateurs").click(function(){
    
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc004641192ac774b019fe6", function(data, test){    
    $(".vidrealisateurs").text("")

    that.realisateur(data)
  });

});
$("#realisateurhayao").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne")
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0adc6cb3406eba1ac77d", function(data, test){    
    $(".vidrealisateurs").text("")

    that.realisateur(data)

  });
});


$("#realisateurhirokazu").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne") 
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc004641192ac774b019fe6", function(data, test){    
    $(".vidrealisateurs").text("")
    
    that.realisateur(data)

  });

});


$("#realisateurmiwa").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne") 
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dbf0adc6cb3406eba1ac77d", function(data, test){    
    $(".vidrealisateurs").text("")
    
    that.realisateur(data)

  });

});


$("#realisateurnaoko").click(function(){
  $(this).addClass("ligne")
  $(this).siblings("li").removeClass("ligne") 
  $.get("https://brianboudrioux.fr/simplon/api/products/category/5dc004641192ac774b019fe6", function(data, test){    
    $(".vidrealisateurs").text("")
    
    that.realisateur(data)

  });

});




$("#misora").click(function(){
  window.location="index.html"
})


// $("img").click(function(){
//   console.log($("this").getAttribut("src"))

// })




});