// Initialize Firebase
  const config = {
  };
  firebase.initializeApp(config);
  
  var fbAuth = firebase.auth();

  var fbUserAirports = db.collection('UserAirports')