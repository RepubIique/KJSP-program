const firebaseConfig = {
  apiKey: 'AIzaSyBnPdKvKok-7PjeBQNJ3f48c6-XybMgaV0',
  authDomain: 'kjs-webapp.firebaseapp.com',
  databaseURL: 'https://kjs-webapp.firebaseio.com/',
  projectId: 'kjs-webapp',
  storageBucket: 'kjs-webapp.appspot.com',
  messagingSenderId: '441205368561',
  appId: '1:441205368561:web:14ad15493cbd6fcaa92b50',
  measurementId: 'G-0714YNCRND',
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/api`;

// App Engine / Debug
const backendUrl = `http://localhost:8080/api`;

export default {
  firebaseConfig,
  backendUrl,
};
