import {createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '../config/firebaseConfig';

export const registerUser = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response;
}

export const loginUser = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth,email, password);
  return response;
}

export const logoutUser = async ()=>{
  await signOut(auth);
}