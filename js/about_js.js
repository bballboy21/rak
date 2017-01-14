$("#newCode").click(function functionName() {
    console.log("hi");
    var newNumber = 400
    firebaseRef = firebase.database().ref(newNumber).set("null")

    console.log("hii");


});
