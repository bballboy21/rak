var totalRAK = document.getElementById("totalRAK");


var firebaseRef = firebase.database().ref("totalRAK")
// console.log(firebaseRef);
firebaseRef.on('value', function(dataSnap) {
  totalRAK.innerText = dataSnap.val();
});



function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

    geocodeAddress(geocoder, map);

}

function geocodeAddress(geocoder, resultsMap) {
  var address = "newark DE"
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      firebaseRef = firebase.database().ref("locations")
      console.log("made map");
      results[0].geometry.location.lat();
      results[0].geometry.location.lng();
      var lat_lng = [results[0].geometry.location.lat(), results[0].geometry.location.lng() ];
      firebaseRef.push(lat_lng);
      // resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
