/* 
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Unidad 2: Relación 7 - Ejercicio 1
 */

var crd;
var map;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var pos_anterior = null;
var distancia = 0;

function success(pos) {
  navigator.geolocation;
  crd = pos.coords;
  
  var platform = new H.service.Platform({
    'apikey': '1qol-_lkH3m-xVoMgD11a4Ap48qR2jX7jjBQzm__edI'
  });

  // Obtain the default map types from the platform object:
  var defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  if (!map){
      map = new H.Map(
        document.getElementById('mapContainer'),
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lat: crd.latitude, lng: crd.longitude }
        });
   }
   else{
       map.setCenter({lat: crd.latitude, lng: crd.longitude});
   }
   
   if (pos_anterior == null){
       pos_anterior = crd;
   }
   else{ 
       let aux1 = Math.pow((crd.longitude - pos_anterior.longitude), 2);
       let aux2 = Math.pow((crd.latitude - pos_anterior.latitude), 2);
       distancia += Math.sqrt(aux1 - aux2);
       
       pos_anterior = crd;
   }
}

// Show a message of each and everyone of the posible errors
function error(err) {
    if (err.code == err.TIMEOUT) 
        alert("We have run out of time");
    if (err.code == err.PERMISSION_DENIED)     
        alert("The user didn\'t allow access to geolocation");
    if (err.code == err.POSITION_UNAVAILABLE)                 
        alert("The device could not retrieve the current position");
}

// Test if geolocation is available
if ("geolocation" in navigator) {
    document.write('Geolocation is available');
} else {
    document.write('Geolocation is not available');
}

// Show current position
//navigator.geolocation.getCurrentPosition(success, error, options);

// Update the position if user is moving
navigator.geolocation.watchPosition(success);

document.write('<br>');
document.write('Has recorrido ' + distancia + ' ul');

// Create a marker icon from an image URL:
var icon = new H.map.Icon('marcador.png');

// Create a marker using the previously instantiated icon:
var marker = new H.map.Marker({ lat: 52.5, lng: 13.4 }, { icon: icon });

// Add the marker to the map:
map.addObject(marker);