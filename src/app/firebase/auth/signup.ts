import { doc, setDoc } from "firebase/firestore";
import firebase_app, { db } from "../config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signUp(
  email: string,
  password: string,
  displayName: string
) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    if (result) {
      updateProfile(result.user, {
        displayName: displayName,
      });
    }
    await setDoc(doc(db, "users", result.user.uid), {
      name: displayName,
      email: email,
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}
