/*
    Autor: Elia Vacas García
    - DESARROLLO WEB ENTORNOS CLIENTE -
    Ejemplo de utilización de CESIUM JS
*/

// Copiar y pegar de la web
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZTNlZTQzZC04YTIxLTRlZDctOTQ2Yy1jNzA0ZjlhMjA1NWYiLCJpZCI6Njk3MjEsImlhdCI6MTYzMzY4OTQxNn0.2j9BGLdrKgk0sJnzNtRpcmdkoks91tfYWrICPQsmjFE';




// Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain()
    }); 
    


 
// Add Cesium OSM Buildings, a global 3D buildings layer.
const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
// Fly the camera to San Francisco at the given longitude, latitude, and height.
viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
  orientation : {
    heading : Cesium.Math.toRadians(0.0),
    pitch : Cesium.Math.toRadians(-15.0),
  }
});

viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0),
    orientation: {
      heading: Cesium.Math.toRadians(20.0),
      pitch: Cesium.Math.toRadians(-35.0),
      roll: 0.0,
    },
});

// Dibujar una elipse
/*var entity = viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(-103.0, 40.0),
  ellipse : {
    semiMinorAxis : 250000.0,
    semiMajorAxis : 400000.0,
    material : Cesium.Color.BLUE.withAlpha(0.5)
  }
});
viewer.zoomTo(viewer.entities);

var ellipse = entity.ellipse; // For upcoming examples*/

// Añadir una foto
//ellipse.material = 'cat.jpeg';

// Cambiar la altura
//wyoming.polygon.height = 250000;

