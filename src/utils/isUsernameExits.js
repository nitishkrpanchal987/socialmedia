import { where, collection, query, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase"

export default async function isUsernameExits(username){
    console.log(username)
    const userRef = collection(db, "users");
    const q = query(userRef, where('username', '==', username));
    const doc = await getDocs(q);

    return doc.size > 0;
}