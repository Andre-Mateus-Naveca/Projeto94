const firebaseConfig = {
    apiKey: "AIzaSyDiUh3UMbu9W9raIq9nI7lOGkQ5y_49mKg",
    authDomain: "site-kwitter.firebaseapp.com",
    databaseURL: "https://site-kwitter-default-rtdb.firebaseio.com",
    projectId: "site-kwitter",
    storageBucket: "site-kwitter.appspot.com",
    messagingSenderId: "60350141535",
    appId: "1:60350141535:web:4adcf23bd705b3d21577ea"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function logout() {
    localStorage.removeItem("userName");
        window.location = "kwitter.html";
    } 