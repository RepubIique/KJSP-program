const firebaseConfig = {
  apiKey: "AIzaSyDMh6Q5tBKwu8k_DAJ4wK-Y83bZjPKfI28",
  authDomain: "kjsp-1e2d0.firebaseapp.com",
  databaseURL: "https://kjsp-1e2d0.firebaseio.com",
  projectId: "kjsp-1e2d0",
  storageBucket: "kjsp-1e2d0.appspot.com",
  messagingSenderId: "228376514383",
  appId: "1:228376514383:web:226559ccfb4d584f247f3a"
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
