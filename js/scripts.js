$(document).ready(function() {
	 $(".user").submit(function(event) {
	 	document.write("SignUp Successful");
	 	event.preventDefualt();
	 });

	 $("#hmo").click(function() {
	 	 $(".all").hide(5000);
           $("#nws").hide(500);
           $(".pht").hide(500);
	 });

     $("#mrm").click(function() {
     	 $(".all").show(6000);
           $("#nws").hide(500);
     });

     $("#new").click(function() {
     	 $("#nws").show(5000);
           $(".all").hide("slow");
           $(".pht").hide(5000);
     });

     $("#logi").submit(function(event) {
          event.preventDefualt();
               
          });

     $("#ft").click(function() {
          $(".pht").show(5000);
          $(".all").hide(5000);
          $("#nws").hide(5000);
     });
     });
