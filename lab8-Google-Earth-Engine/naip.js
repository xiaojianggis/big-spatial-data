var table2 = ee.FeatureCollection("users/lixiaojianggis/bos_bound");


// Using the boundary of Boston to compute the NDVI for Boston Area and extract the vegetation cover
var bound_lon1 = -71.190670
var bound_lat1 = 42.405119
var bound_lon2 = -70.984160
var bound_lat2 = 42.228449

// var bound_lat2 = 42.401418
// var bound_lon2 = -71.189606


var lon_mid = (bound_lon1 + bound_lon2)/2
var lat_mid = (bound_lat1 + bound_lat2)/2

var naip2016 = ee.ImageCollection('USDA/NAIP/DOQQ')
  .filterBounds(ee.Geometry.Rectangle(bound_lon1, bound_lat1, bound_lon2, bound_lat2))
  .filterDate('2016-01-01', '2016-12-31');


// Spatially mosaic the images in the collection and display.
var mosaic = naip2016.mosaic();

// Get information about the bands as a list; prints in console at right
var bandNames = mosaic.bandNames();
print('Band names: ', bandNames); 


//Get the projection of Band 1
var b1proj = mosaic.select('B').projection();
print ('Band 1 projection: ', b1proj);

// Map.addLayer(mosaic.clip(table2), {bands: ['N', 'R', 'G']}, 'NAIP DOQQ');  
Map.addLayer(mosaic, {bands: ['N', 'R', 'G']}, 'NAIP DOQQ');  


var red = mosaic.select('R');
var nir = mosaic.select('N');
var ndvi = nir.subtract(red).divide(nir.add(red)).rename("NDVI");


// Display the result.
// Map.centerObject(ndvi, 9);
var ndviParams = {min: -1, max: 1, palette: ['8B0000','FF0000', 'FF4500', 'FFFF00', '00FF00','008000', '006400']};
Map.addLayer(ndvi.clip(table2), ndviParams, 'NDVI image');
Map.setCenter(-71.087700, 42.3167773, 10);
