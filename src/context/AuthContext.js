"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { auth } from "@/app/firebase";

import {
  signInWithPopup,
  fetchSignInMethodsForEmail, // Add this import
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  if (typeof window === "undefined") return;

  const checkUserAuthentication = () => {
    return user !== null; // Return true if user is not null (logged in), otherwise return false
  };
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  // const emailPasswordSignIn = async (email, password, username) => {
  //   try {
  //     const signInMethods = await fetchSignInMethodsForEmail(auth, email);

  //     if (signInMethods.includes("password")) {
  //       const userCredential = await signInWithEmailAndPassword(auth, email, password);
  //       const user = userCredential.user; // Get the user from the userCredential

  //       if (username) {
  //         console.log("User before profile update:", user); // Log the user object

  //         await user.updateProfile({
  //           displayName: username,
  //         });
  //       }
  //     } else {
  //       throw new Error("User not found or not registered with email/password.");
  //     }
  //   } catch (error) {
  //     console.log("Sign-in error:", error.message);
  //     throw error;
  //   }
  // };

  // const emailPasswordSignUp = async (email, password, username) => {
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user; // Get the user from the userCredential

  //     if (username) {
  //       console.log("User before profile update:", user); // Log the user object

  //       await user.updateProfile({
  //         displayName: username,
  //       });
  //     }
  //   } catch (error) {
  //     console.log("Sign-up error:", error.message);
  //     throw error;
  //   }
  // };

  const emailPasswordSignUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError("An error occurred while signing up. Please try again.");
    }
  };

  const emailPasswordSignIn = async (email, password) => {
    try {
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.includes("password")) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        setError(
          "No user found with this email/password. Please sign up first."
        );
      }
    } catch (error) {
      setError(
        "An error occurred while signing in. Please check your credentials and try again."
      );
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return typeof window ? (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        emailPasswordSignIn,
        emailPasswordSignUp,
        logOut,
        checkUserAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  ) : (
    ""
  );
};

export const UserAuth = () => {

  return useContext(AuthContext);
};
