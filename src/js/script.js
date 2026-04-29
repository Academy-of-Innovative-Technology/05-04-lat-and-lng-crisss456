mapboxgl.accessToken = env.MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [0, 0], 
  zoom: 2
});

function setMapCenter() {

  const long = parseFloat(document.getElementById("longitude").value);
  const lat = parseFloat(document.getElementById("latitude").value);

  console.log(long, lat);

  if (!isNaN(long) && !isNaN(lat)) {

    const coordinates = new mapboxgl.LngLat(long, lat);

    map.flyTo({
      center: coordinates,
      zoom: 15
    });

  } else {
    alert("Please enter valid coordinates.");
  }
}