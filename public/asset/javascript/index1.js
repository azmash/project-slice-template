
$(document).ready(function(){
  initMap(-7.7827627,110.3883716, -100, 40)
  $("#pioneer").on('click', function(){
    initMap(-6.859315, 107.651514, 50, 50)
  });
  $("#houston").on('click', function(){
    initMap(1.297427,103.7859195, -80, 70)
  });
  $("#armstrong").on('click', function(){
    initMap(-7.7827627,110.3883716, -100, 40)
  });
  $("#explorer").on('click', function(){
    initMap(-7.7787772,110.3885407, -100, 60)
  });    
});

function initMap(lati, lngi, anc1, anc2) {
  // var myLatLng = {lat: lati, lng: lngi};
  var myLatLng = new google.maps.LatLng(lati, lngi);

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng
  });

  var icon = {
      url: "https://info.wonderlabs.io/hubfs/dev%20partner/Pin.png", // url
      // scaledSize: new google.maps.Size(35, 58), 
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(anc1,anc2) // anchor
  };

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.BOUNCE,
    icon: icon,
    title: 'Wonderlabs Amstrong'
  });
}
