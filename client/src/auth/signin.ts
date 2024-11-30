// @ts-nocheck
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBvU650Mi6v5kePxAu8TbLhipaybS-aJ4A",
  authDomain: "super-deluxe-arun.firebaseapp.com",
  projectId: "super-deluxe-arun",
  storageBucket: "super-deluxe-arun.firebasestorage.app",
  messagingSenderId: "34031725861",
  appId: "1:34031725861:web:31ab45b69b256acfc17ecc",
  measurementId: "G-J93FH5M19B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'it';
window.recaptchaVerifier = new RecaptchaVerifier(auth,'recaptcha-container', {
    'size': 'normal',
    'callback': (response) => {
        console.log("reCAPTCHA solved");
    },
    'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        console.warn("reCAPTCHA expired, please try again.");

    }
});
export const sendVerificationCode = (phoneNumber: string) => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            console.log("Verification code sent.");
        })
        .catch((error) => {
            console.error("Error during sign-in:", error);
        });
};

// Function to verify the code entered by the user
export const verifyCode = (code: string) => {
    const confirmationResult = window.confirmationResult;

    confirmationResult.confirm(code)
        .then((result) => {
            const user = result.user;
            console.log("User signed in:", user);
        })
        .catch((error) => {
            console.error("Error during verification:", error);
        });
};


const phoneNumber = "+1234567890"; 
sendVerificationCode(phoneNumber);
