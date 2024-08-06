import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjUvQM4Q9DBVpxgnvHWB-ywJEII2iH1-Y",
  authDomain: "inventory-management-2f1d9.firebaseapp.com",
  projectId: "inventory-management-2f1d9",
  storageBucket: "inventory-management-2f1d9.appspot.com",
  messagingSenderId: "215863035186",
  appId: "1:215863035186:web:bbe1f28df07225655d032b",
  measurementId: "G-KDZFSRN8DQ"
};

// Initialize Firebase
let app;
let firestore;
let analytics;

if (typeof window !== 'undefined') {
  // Initialize Firebase only on the client side
  app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);

  // Dynamically import analytics to avoid SSR issues
  import('firebase/analytics').then((analyticsModule) => {
    const { getAnalytics, isSupported } = analyticsModule;
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  });
}

export { firestore, analytics };