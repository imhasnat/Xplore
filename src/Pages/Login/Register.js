import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {
    const { createUser, emailVerfication, updateProfileInfo, } = useContext(AuthContext);
    return (
        <div>
            <h1>Register</h1>
        </div>
    );
};

export default Register;