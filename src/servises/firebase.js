import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAjAHBGRAATG6cMibOCHUs6RA9Yt0FPOSo",
    authDomain: "pokemon-game-dd58c.firebaseapp.com",
    databaseURL: "https://pokemon-game-dd58c-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-dd58c",
    storageBucket: "pokemon-game-dd58c.appspot.com",
    messagingSenderId: "152124186056",
    appId: "1:152124186056:web:a493870f8397b8968234fd"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;