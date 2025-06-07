// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAps9sNrxc3F0K-TO-fhKnFYk74OjAbwuU",
  authDomain: "websitetogether-23345.firebaseapp.com",
  projectId: "websitetogether-23345",
  storageBucket: "websitetogether-23345.firebasestorage.app",
  messagingSenderId: "571147987977",
  appId: "1:571147987977:web:c303b7b877701eb8115cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const vote = (name: string) => {
    const votesRef = collection(db, "votes");
    addDoc(votesRef, {
        name: name
    });
}

export const getVotes = async () => {
    const votesRef = collection(db, "votes");
    const snapshot = await getDocs(votesRef);
    const votes = snapshot.docs.map((doc: any) => doc.data().name);
    
    // Count votes for each name
    const voteCounts: Record<string, number> = {};
    votes.forEach((name: string) => {
        voteCounts[name] = (voteCounts[name] || 0) + 1;
    });
    
    if (!voteCounts["nicole"]) {
        voteCounts["nicole"] = 0;
    }
    if (!voteCounts["audra"]) {
        voteCounts["audra"] = 0;
    }
    console.log(voteCounts);
    return voteCounts;
}