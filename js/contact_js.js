var submitbtn = document.getElementById("submitBtn");
var theMessage = document.getElementById("message");
var theKeys = document.getElementById("keys");
var CamTitle = document.getElementById("CamTitle");
var state = document.getElementById("state");
var notCity = document.getElementById("notCity");

var badwordsList = ["bukkake", "wet dream", "creampie", "4r5e", "5h1t", "5hit", "a55", "anal", "anus", "ar5e", "arrse", "arse", "ass", "ass-fucker", "asses", "assfucker", "assfukka", "asshole", "assholes", "asswhole", "a_s_s", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "ballsack", "bastard", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "boiolas", "bollock", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cock-sucker", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f4nny", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fuckings", "fuckingshitmotherfucker", "fuckme", "fucks", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "f_u_c_k", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "god-damned", "goddamn", "goddamned", "hardcoresex", "hell", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jack-off", "jackoff", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "master-bate", "masterb8", "masterbat*", "masterbat3", "masterbate", "masterbation", "masterbations", "masturbate", "mo-fo", "mof0", "mofo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rectum", "retard", "rimjaw", "rimming", "s hit", "s.o.b.", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "slut", "sluts", "smegma", "smut", "snatch", "son-of-a-bitch", "spac", "spunk", "s_h_i_t", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx"];



// var card1 = firebase.database().ref();
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

var cardNumFromHash = window.location.hash.substr(1)
console.log(cardNumFromHash); //gets the ending part of the URL afte the #

var card_data = firebase.database().ref().child(cardNumFromHash);
card_data.on("child_added", snap => {
    var campaign = snap.child("campaign").val();
    var message = snap.child("message").val();
    var state = snap.child("state").val();
    var notCity = snap.child("notCity").val();

    console.log(campaign + ", " + message + ", " + state + ", " + notCity);
    $("#cards").append(
        "<div class='container'>" +
        "<div class='row'>" +
        "<div class='col-md-4'>" +
        "</div>" +
        "<div class='media col-md-4 border' >" +
        "<div class='media-body'>" +
        "<h4 class='media-heading' style='padding-top:10px;'>Act of Kindness</h4>" +
        "<p>" + message + "</p>" +
        "<h4 class='media-heading' >Location</h4>" +
        "<p>" + state +"</p>" +
        "</div>" +
        "<div class='col-md-4'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</div>")
});
var hidden = $("div.gone");
var thanks = $("div.thankyou");
var badWord = $("div.badWord");


function submit() {


    hidden.hide();
    thanks.hide();
    badWord.hide();

    var message = document.getElementById('messageSumbit');
    var state = document.getElementById('stateSubmit');
    var notCity = document.getElementById('notCity');

    console.log("here comes the length");
    console.log(message.value.length);
    console.log(state.value.length);

    if (message.value.length < 1 || state.value.length < 1) {
        console.log("it was less than 5 char");
        hidden.show();
    } else if (isThereABadWord(message)) {
        badWord.show();
        $("#messageSumbit").val('');
        $("#stateSubmit").val('');

    } else {

        thanks.show();

        console.log(message.value);
        console.log(stateSubmit.value);
        var postData = {
            campaign: "Abington Heights",
            message: message.value,
            state: state.value,
            // notCity: notCity.value
        };
        console.log(postData);
        firebaseRef = firebase.database().ref();
        firebaseKey = firebase.database().ref().child(cardNumFromHash).push(postData).key;
        geocodeAddress();
        add_to_total();


    }



    // firebaseRef.child(cardNumFromHash).child(firebaseKey).push(postData);
};

function isThereABadWord(message) {
    for (var i = 0; i < badwordsList.length; i++) {
        if (message.value.includes(badwordsList[i])) {
            console.log("there was a bad word")
            return true
        }


    }
}
// this is the google APIT that geocoes an adress

// var geocoder = new google.maps.Geocoder();







function add_to_total() {
    var addRankRef = firebase.database().ref('totalRAK');
    addRankRef.transaction(function(currentRank) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        return currentRank + 1;
        // console.log("hi");
    });


}



var card1_data = firebase.database().ref(cardNumFromHash + '/post' + '/campaign');
card1_data.on('value', function(dataSnap) {
    CamTitle.innerText = dataSnap.val();
    console.log(dataSnap.val());
});



function initMap() {
  // var map = new google.maps.Map(document.getElementById('map'), {
  //   zoom: 8,
  //   center: {lat: -34.397, lng: 150.644}
  // });
  var geocoder = new google.maps.Geocoder();


  // geocodeAddress(geocoder);

}

function geocodeAddress() {
  var geocoder = new google.maps.Geocoder();
  var address = document.getElementById('stateSubmit').value;
  $("#messageSumbit").val('');
  $("#stateSubmit").val('');
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      firebaseRef = firebase.database().ref("locations")

      results[0].geometry.location.lat();
      results[0].geometry.location.lng();
      var lat_lng = [results[0].geometry.location.lat(), results[0].geometry.location.lng() ];
      firebaseRef.push(lat_lng);
      // resultsMap.setCenter(results[0].geometry.location);
      // var marker = new google.maps.Marker({
      //   map: resultsMap,
      //   position: results[0].geometry.location
      // });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}







//
