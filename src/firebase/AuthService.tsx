import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import {
  User,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDXhuAxXq-eBLgsXCx2Ph5X2eMs8-thdUo',
  authDomain: 'premium-aloe-410615.firebaseapp.com',
  projectId: 'premium-aloe-410615',
  storageBucket: 'premium-aloe-410615.appspot.com',
  messagingSenderId: '1060424804196',
  appId: '1:1060424804196:web:0d8f65ddaea383009a7c71',
  measurementId: 'G-ZD5XH92N6B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

class AuthService {
  private auth = auth;

  async login(email: string, password: string): Promise<User> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }

  async update(displayName: string): Promise<User | null> {
    try {
      if (this.auth.currentUser) {
        await updateProfile(this.auth.currentUser, { displayName });
        return this.auth.currentUser;
      }
      throw new Error('No user is currently logged in');
    } catch (error) {
      console.error('Error during profile update:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }
}

export default new AuthService();
