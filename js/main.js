$(document).ready(function(){
    $("ul").hide();
    $("li").css("background-color", "#F5F5F5");


    $("#sBtn").click(function(){
       $("#mBtn").fadeOut();
       $("#slushBtn").fadeOut();
       $("#scoopFlavour").slideDown();
      });
    $("#mBtn").click(function(){
       $("#sBtn").fadeOut();
       $("#slushBtn").fadeOut();
       $("#milkFlavour").slideDown();
      });
    $("#slushBtn").click(function(){
       $("#mBtn").fadeOut();
       $("#sBtn").fadeOut();
       $("#slushFlavour").slideDown();
      });
      $("#home").click(function(){
         $("#mBtn").fadeIn();
         $("#sBtn").fadeIn();
         $("#slushBtn").fadeIn();
         $("#slushFlavour").slideUp();
         $("#scoopFlavour").slideUp();
         $("#milkFlavour").slideUp();
        });
});
