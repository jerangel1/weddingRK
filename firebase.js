// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDP2nNxKHlkjwQJZhU592apdWyre_NflMo",
    authDomain: "bodark20oct2023.firebaseapp.com",
    projectId: "bodark20oct2023",
    storageBucket: "bodark20oct2023.appspot.com",
    messagingSenderId: "870785065222",
    appId: "1:870785065222:web:ffe73a9c01784e7dde3e87",
    measurementId: "G-221JP8FTZL"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
// Crea una referencia de almacenamiento para la foto que quieres subir.
var storageRef = firebase.storage().ref();

// Sube la foto a la referencia de almacenamiento.
storageRef.child("my-photo.jpg").put(document.getElementById("archivo").files[0]).then(function(snapshot) {
  // La foto se ha subido correctamente.

  // Actualiza el sitio web para reflejar el cambio.
  // ...

  // Obtén el nombre del usuario.
  var nombre = document.getElementById("nombre").value;

  // Almacena el nombre del usuario junto con la foto.
  snapshot.ref.setMetadata({
    nombre: nombre
  });
});