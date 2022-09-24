const locationInfo = document.querySelector(".Geolocation p");


function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    locationInfo.innerText = 'Your location(latitude, longitude) : '+ lat + ', '+long;
}
function onGeoError(){
    locationInfo.innerText = 'Your location(latitude,longitude) : Not Found';
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

