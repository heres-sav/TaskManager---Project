import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCQfeENi6vJ2uQgG5C0DJLtCShXqNFpd68",
  authDomain: "blame-bishop.firebaseapp.com",
  databaseURL: "https://blame-bishop-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blame-bishop",
  storageBucket: "blame-bishop.appspot.com",
  messagingSenderId: "666037887628",
  appId: "1:666037887628:web:30358271c9df99702ed1a9",
  measurementId: "G-EH8E1VNKE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const getTodos = async () => {
    return await get(ref(database, "/todos/"))
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            }
            else {
                return "Fuck You"
            }
        })
        .catch((error) => {
            console.error(error);
            return "Error Occurred"
        });
}

export const setTodos = async (value) => {
    console.log(value);
    return await set(ref(database, "/todos/" + Math.floor(Date.now() / 1000)), value)
}