$(document).ready(function() {
	 $("#sub").submit(function(event) {
	 	alert("Thanks for subscribing!");

	 	event.preventDefualt();
	 });

	 $("#hmo").click(function() {
	 	 $(".all").hide(5000);
	 });

     $("#mrm").click(function() {
     	 $(".all").show(6000);
     });
     
     });
