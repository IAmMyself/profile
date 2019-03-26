$(document).ready(function () {
  $("#menu").click(function () {
    $("#menu").css("display", "none");
    $("#back").css("display", "block");
    $("#navbar").css("display", "block");
  })
  
  $("#document").click(function () {
    if ($("#back").css("display") == "block") {
      $("#back").css("display", "none");
      $("#menu").css("display", "block");
      $("#navbar").css("display", "none");
    }
  })
  
  $("a").click(function () {
    if ($("#back").css("display") == "block") {
      $("#back").css("display", "none");
      $("#menu").css("display", "block");
      $("#navbar").css("display", "none");
    }
  })

  $("#back").click(function () {
    $("#back").css("display", "none");
    $("#menu").css("display", "block");
    $("#navbar").css("display", "none");
  })
  
  $(window).resize(function(){
    if ($("#projects").css("background-color") == "rgb(24, 24, 23)") {
      $("#hamburger").css("display", "none");
      $("#navbar").css("display", "block");
    } else {
      $("#hamburger").css("display", "block");
      $("#navbar").css("display", "none");
      $("#back").css("display", "none");
      $("#menu").css("display", "block");
    }
  });
});