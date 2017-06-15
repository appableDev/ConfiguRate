
/*=======================Tab===============================================*/

$(document).ready(function() {
  $("#btn-menu a").click(function(e){
    var $place = $(this).attr("href");
      $("body").animate({scrollTop:$($place).offset().top - $('#nav-bar').height()},600);
    e.preventDefault();
    
    var allA = $("#btn-menu").find("a");
    for(var i=0; i<allA.length; i++) {
      $( allA[i]).removeClass( "active" )
    }
    $(e.target).addClass('active');
    });
});

