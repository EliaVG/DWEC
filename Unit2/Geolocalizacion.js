/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var crd;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  crd = pos.coords;
  
  var platform = new H.service.Platform({
    'apikey': '1qol-_lkH3m-xVoMgD11a4Ap48qR2jX7jjBQzm__edI'
  });

  // Obtain the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: crd.latitude, lng: crd.longitude }
      });
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);