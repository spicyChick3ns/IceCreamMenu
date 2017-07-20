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
});
