/* global google */

function initMap(lati, lngi, anc1, anc2) {
  const myLatLng = new google.maps.LatLng(lati, lngi);

  const mapi = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: myLatLng,
  });

  const iconi = {
    url: '/./img/pin.png', // url
    origin: new google.maps.Point(0, 0), // origin
    anchor: new google.maps.Point(anc1, anc2), // anchor
  };

  const marker = new google.maps.Marker({
    position: myLatLng,
    map: mapi,
    animation: google.maps.Animation.BOUNCE,
    icon: iconi,
    title: 'Wonderlabs Amstrong',
  });
  console.log(marker);
}

$(document).ready(() => {
  initMap(-7.7827627, 110.3883716, -100, 40);
  $('#pioneer').on('click', () => {
    initMap(-6.859315, 107.651514, 50, 50);
  });
  $('#houston').on('click', () => {
    initMap(1.297427, 103.7859195, -80, 70);
  });
  $('#armstrong').on('click', () => {
    initMap(-7.7827627, 110.3883716, -100, 40);
  });
  $('#explorer').on('click', () => {
    initMap(-7.7787772, 110.3885407, -100, 60);
  });
});
