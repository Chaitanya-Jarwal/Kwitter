var firebaseConfig = {
  apiKey: "AIzaSyDB5sPRsIco9X1W4-YEIE8OsDUB38kYB6Q",
  authDomain: "social-website-68f5a.firebaseapp.com",
  databaseURL: "https://social-website-68f5a-default-rtdb.firebaseio.com",
  projectId: "social-website-68f5a",
  storageBucket: "social-website-68f5a.appspot.com",
  messagingSenderId: "137156594729",
  appId: "1:137156594729:web:2dad5747ede375ef65e038"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;  //score=score+1 -- score +=1
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
