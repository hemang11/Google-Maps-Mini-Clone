mapboxgl.accessToken = 'pk.eyJ1IjoiaGVtYW5nMTEiLCJhIjoiY2toZXV3d3BkMDV6eTJ1bTIzdmhja2NiZyJ9.cegiH6c9pSHmzdY-hzVjIw';


navigator.geolocation.getCurrentPosition(success,error,{
    enableHighAccuracy:true
});


function success(loc){

    const center = [loc.coords.longitude,loc.coords.latitude];

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center:center,
        zoom:12
    });

    const direction = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    const nav = new mapboxgl.NavigationControl();

    const search = new MapboxGeocoder({accessToken: mapboxgl.accessToken,mapboxgl: mapboxgl});
    
    const curr_loc = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })

    map.addControl(direction,'top-left');
    map.addControl(nav,'bottom-left');
    map.addControl(search)
    map.addControl(curr_loc);

}

function error(){
    document.getElementById('root').innerHTML=`
    <h2>Sorry You have entered wrong location</h2>
    <h3>Kindly Referesh the Page or contact the admin</h3>
    `
}



