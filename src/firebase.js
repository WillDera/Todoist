import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDjU0yA50PZbUHqChV_j-oiXDdQI_wnPgU",
    authDomain: "todoist-b8aa3.firebaseapp.com",
    databaseURL: "https://todoist-b8aa3-default-rtdb.firebaseio.com",
    projectId: "todoist-b8aa3",
    storageBucket: "todoist-b8aa3.appspot.com",
    messagingSenderId: "844509514260",
    appId: "1:844509514260:web:ebc3ffaf6fd16e6904f501"
})

export { firebaseConfig as firebase };