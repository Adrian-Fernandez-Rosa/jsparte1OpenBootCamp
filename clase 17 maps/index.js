let marker, map;

function initMap() {  
//console.log("iniciando mapa")
const posicion = {
    lat: -32.94682,
    lng: -60.63832
}

map = new google.maps.Map(document.getElementById("map") , {
    zoom: 11,
    center: posicion
})
// primer parrametro en que lugar lo usaremos

     marker = new google.maps.Marker({
        position: posicion,
        map: map,
        title: "Posición Inicial"
    })

   // marker.setPosicion()
   // Obtener la geolocalizacion del cliente
   geoPosiciona()
}

function geoPosiciona() {
    
    // en navegadores populares como chrome y firefox si se puede usar pero en antiguos no .
    if(navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const options = {timeout: 60000}
        const watchPos= geoLoc.watchPosition(centraMapa, onError, options);
    } else {
        alert("tu explorador no admite geolocalización")
    }

}

function centraMapa(position) {
    const nuevaPos = { 
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    console.log(nuevaPos);
    map.setCenter(nuevaPos);
    
    
}

function onError(error){
    console.error(error)
}