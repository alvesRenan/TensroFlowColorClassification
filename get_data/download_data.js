function setup() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDPekCKX4ee6h9NVR2lEITGAM0XIHn-c7c",
    authDomain: "color-classification.firebaseapp.com",
    databaseURL: "https://color-classification.firebaseio.com",
    projectId: "color-classification",
    storageBucket: "",
    messagingSenderId: "590040209608"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  let ref = database.ref('colors');
  ref.once('value', gotData);
}

function gotData(results) {
  let data = results.val();
  let allData = {
    entries: []
  }

  let keys = Object.keys(data);
  for (let key of keys) {
    let record = data[key];
    let id = record.uid;
    allData.entries.push(record);
  }

  saveJSON(allData, 'colorData.json');
}