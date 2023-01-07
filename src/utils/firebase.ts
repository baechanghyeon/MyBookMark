// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAuBm0CTgb5g0o-tVMQwvUj7RHmc1QHP0s',
  authDomain: 'mybookmark-39cc6.firebaseapp.com',
  projectId: 'mybookmark-39cc6',
  storageBucket: 'mybookmark-39cc6.appspot.com',
  messagingSenderId: '376873634800',
  appId: '1:376873634800:web:f36973631a4a2e83bdeb35',
  measurementId: 'G-KS5BEYN8D1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
