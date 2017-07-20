var slushBtnPress= ["#sBtn", "#mBtn", "#slushBtn" ]
$(document).ready(function(){
    $("ul").hide();

    // $("#sBtn").click(function()) {
    //     $("#mBtn").hide();
    // });
    $("#sBtn").click(function(){
       $("#mBtn").fadeOut();
       $("#slushBtn").fadeOut();
       $("#scoopFlavour").slideDown();

      });
});
