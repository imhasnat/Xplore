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
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside effect', currentUser);
            if (currentUser === null ||
                currentUser.emailVerified) {

                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const emailVerfication = (email) => {
        setLoading(true);
        return sendEmailVerification(auth.currentUser)
    }

    const updateUserInfo = (profile) => {
        setLoading(true);
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
        updateUserInfo,
        loginWithPopup
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;