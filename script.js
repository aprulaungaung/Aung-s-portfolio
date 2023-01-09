

window.addEventListener("resize", function(){

  let w = window.innerWidth;
  if(w <= 500){

  $(".header-container").append("<img class='smallestSphere' src='images/wireSphere.svg'/>");

  $(".whole-package").append("<img class='leave' src='images/leave.svg'/>");
  $("body").prepend("<img class='ring' src='images/colorRing.svg' />");


  }else if(w > 500){
    $(".leave").css("display","none");
    $(".ring").css("display","none");
    $(".smallestSphere").css("display", "none");

  }


})
