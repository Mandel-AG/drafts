$(document).ready(function() {

var params = new window.URLSearchParams(window.location.search);
var lien = params.get("lien")

$("#frame").attr("src",lien)


$("#logo").animate({"fontSize" : "+=250px",
					"opacity":"0"
},2500);
$("#logo").animate({"fontSize" : "-=250px",
					"opacity":"0"
},1000);


$("#retour").click(function(){
	window.history.back();
})




// $(".retourparametre").fadeOut(2000)

// function fade(){
// 	$(".retourparametre").fadeOut(4000);

// 		$("#frame").mousemove(function(){
// 			fade().stop();
// 	  		$(".retourparametre").show("slow");
// 	  		// fade();
// 		});
// };


$(".retourparametre").hover(function(){
			$(this).show();
			$(this).fadeOut("fast");
});
// $(".retourparametre").mousemove(function(){
// 			$("this").show();
// 			$(".retourparametre").fadeOut(2000);
// });


// function fade(){
//   	setTimeout(function(){ $(".retourparametre").fadeOut(1500); 
// 	}, 3000);
// }

// $("body").mousemove(function(){
// 			$(".retourparametre").show("fast")
// 			fade();



	
			







})

