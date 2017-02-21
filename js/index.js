/*

var lastDocumentHeight = $(document).height();

$( window ).resize(function() {
//$(document).on("scrollstop",function(){

  var currentDocumentHeight = $(document).height();

  var delta = currentDocumentHeight - lastDocumentHeight;
  var tetha = currentDocumentHeight < lastDocumentHeight ?
    currentDocumentHeight / lastDocumentHeight:
    lastDocumentHeight / currentDocumentHeight;


  window.scrollTo(0, window.scrollY + delta * tetha / 2);

  $(".navbar-brand").html(delta + ", " + window.scrollY)

  lastDocumentHeight = currentDocumentHeight;
});*/


document.onkeyup = function(e) {
  if(e.keyCode == 90) {
    alert($(document).height());
  }
}


$(function () {

    function initMap() {
      var uluru = {lat: -26.2717061, lng: -47.9335963};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: uluru,
        scrollwheel: false,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM
        },
        streetViewControl: false,
        mapTypeControl: false
      });
      var marker = new google.maps.Marker({
        position: {lat: -26.489922, lng: -49.077456},
        map: map
      });

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});

$("#resumeButton").click(function() {
  window.open("https://drive.google.com/file/d/0B4hNq5UKwSItRjNSRUxyTm1ScGM/view?usp=sharing", '_blank');
});




$(document).ready(function(){
  
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 350, function(){
        window.location.hash = hash;
      });
    }
  });
  
  
});

//make navbar dropdown collapse when a button is clicked
$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
});