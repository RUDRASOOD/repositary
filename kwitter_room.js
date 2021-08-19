
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDtTJ3-uv-azHXqu1ZUEYts-aaoqVf6Dxg",
      authDomain: "lets-chat-d1713.firebaseapp.com",
      databaseURL: "https://lets-chat-d1713-default-rtdb.firebaseio.com",
      projectId: "lets-chat-d1713",
      storageBucket: "lets-chat-d1713.appspot.com",
      messagingSenderId: "473299529036",
      appId: "1:473299529036:web:a098fdc0df49d8b87533e9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
