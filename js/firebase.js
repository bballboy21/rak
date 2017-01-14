

var submitbtn = document.getElementById("submitBtn");
var theMessage = document.getElementById("message");
var theKeys = document.getElementById("keys");
var CamTitle = document.getElementById("CamTitle");


var card1 = firebase.database().ref();

var nameOfCards = []
card1.on('value', function(dataSnap) {
  // theKeys.innerText = dataSnap.val();

  for (var propName in dataSnap.val()){
    nameOfCards.push(propName)
  }
  console.log(nameOfCards);
  // console.log(dataSnap.val())
});


// $( "#message" ).autocomplete({
//   source: nameOfCards
//   // console.log(nameOfCards)
//   // [ "c++", "java", "php", "coldfusion", "javascript", "asp", "ruby" ]
// });

function testFun() {
  // console.log("hi")

  // var saveThis =  theMessage.value
  // var firebaseRef = firebase.database().ref();
  // console.log(theMessage.value)
  window.location.href = "/contact.html" + "#" + theMessage.value
  // firebaseRef.child("text").set(saveThis);
}

function displayStats() {
  var type = window.location.hash.substr(1);
  console.log(type);

}

// var type = window.location.hash.substr(1)
// var card1 = firebase.database().ref().child(type).child("campaign").val();
// console.console.log(card1);
