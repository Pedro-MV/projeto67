import firebase from 'firebase';

// adicione SDK do Firebase

const firebaseConfig = {
        apiKey: "AIzaSyCHikgq4ftmzxzhakZyosogx_GyzzIXmgs",
        authDomain: "projeto67-84407.firebaseapp.com",
        databaseURL: "https://projeto67-84407-default-rtdb.firebaseio.com",
        projectId: "projeto67-84407",
        storageBucket: "projeto67-84407.appspot.com",
        messagingSenderId: "734584150845",
        appId: "1:734584150845:web:0a4dce52a5b4e1b6448354"
};

// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();