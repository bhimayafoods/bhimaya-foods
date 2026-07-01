import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';

const ALLOWED_ADMINS = [
    'bhimayafoods@gmail.com',  // Owner
    'ssaiprasanth333@gmail.com' // Developer
];

const PrivateRoute = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    if (!ALLOWED_ADMINS.includes(currentUser.email)) {
        // If they are logged in but not an admin, redirect them to the home page
        return <Navigate to="/" />;
    }

    return children;
};

export default PrivateRoute;
