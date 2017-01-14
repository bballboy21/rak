$(document).ready(function(){
var totalRAK = document.getElementById("totalRAK");
var firebaseRef = firebase.database().ref("totalRAK")
// console.log(firebaseRef);
firebaseRef.on('value', function(dataSnap) {
    totalRAK.innerText = dataSnap.val();
});
var i = 0

var display_this_location = function(newLoc){
    console.log(newLoc);
    makeMarker(newLoc)
};

function get_pins() {
  var array_of_pins = []

    firebaseRef = firebase.database().ref("locations")
    firebaseRef.on("child_added", snap => {

        var lat = snap.child("0").val();
        var lng = snap.child("1").val();
        array_of_pins['lat'] = lat;
        array_of_pins['lng'] = lng;
        var newLoc = {lat: lat, lng: lng}
        array_of_pins.push(newLoc);
        display_this_location(newLoc);
    })

    array_of_pins.forEach(makeMarker)
    // return array_of_pins
    // makeMarker(array_of_pins)


}

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {
            lat: 39.8333333,
            lng: -98.585522
        }

    });


    // var myLatLng = {lat: -25.363, lng: 131.044};
    // var marker = new google.maps.Marker({
    //   position: myLatLng,
    //   map: map,
    //   title: 'Hello World!'
    // });

    var geocoder = new google.maps.Geocoder();

    document.getElementById('submit').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });
}

window.map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {
      lat: 39.8333333,
      lng: -98.585522
    }
});


function makeMarker(pinObj) {
    var map = window.map;
    // var myLatLng = {
    //     lat: listOfPins["lat"],
    //     lng: listOfPins["lng"]
    // };
    var marker = new google.maps.Marker({
        position: pinObj,
        map: map,
        title: 'Hello World!'
    });

}


function geocodeAddress(geocoder, resultsMap) {
    var address = document.getElementById('address').value;
    geocoder.geocode({
        'address': address
    }, function(results, status) {
        if (status === 'OK') {

            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}
get_pins();
});
