import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // if(currentUser === null )
            setUser(user);
        })
        setLoading(false);
        return () => {
            unSubscribe();
        }
    }, []);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const emailVerfication = (email) => {
        return sendEmailVerification(auth.currentUser)
    }

    const updateProfileInfo = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const loginWithPopup = provider => {
        return signInWithPopup(auth, provider);
    }

    const value = {
        user,
        loading,
        theme,
        setUser,
        setTheme,
        createUser,
        logIn,
        logOut,
        emailVerfication,
        updateProfileInfo,
        loginWithPopup
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;