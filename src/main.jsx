import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCZGTAwW6o917to6YJdIGNPjOTPqBEzxFc",
  authDomain: "proyecto1-de0ea.firebaseapp.com",
  projectId: "proyecto1-de0ea",
  storageBucket: "proyecto1-de0ea.appspot.com",
  messagingSenderId: "982946288277",
  appId: "1:982946288277:web:6d0e26fe63348526be819c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

