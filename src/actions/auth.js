import { fb, googleAuthProvider } from '../firebase/firebase';

const login = uid => ({ type:'LOGIN', uid });
const logout = () => ({ type: 'LOGOUT' });
const startLogin = () => () => fb.auth().signInWithPopup(googleAuthProvider);
const startLogout = () => () => fb.auth().signOut();

export { login, logout, startLogin, startLogout };