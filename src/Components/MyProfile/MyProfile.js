import React from 'react';
import useAuth from '../../Hooks/useAuth';

const MyProfile = () => {
    const { user } = useAuth();
    return (
        <div className="container my-5">
            <h1>My Profile</h1>
            <h3>Email: {user?.email}</h3>
        </div>
    );
};

export default MyProfile;