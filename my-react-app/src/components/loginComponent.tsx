import { checkLoginSuccess } from '../Services/LoginService.ts';
import { LoginData } from '../Services/LoginService.ts';
import React, { useState } from 'react';

const LoginComponent = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        uniqueCode: '',
        userName: '',
        password: ''
    });

    const [error, setError] = useState<{ [key: string]: string | null }>({
        uniqueCode: null,
        userName: null,
        password: null
    });

    const validateLoginData = () => {
        let newError: { [key: string]: string | null } = { ...error }; // Copy current error state
        let hasError = false;

        if (!loginData.uniqueCode || loginData.uniqueCode === '') {
            newError.uniqueCode = 'Unique code is required';
            hasError = true;
        } else {
            newError.uniqueCode = null; // Clear the error for this field if valid
        }

        if (!loginData.userName || loginData.userName === '') {
            newError.userName = 'Username is required';
            hasError = true;
        } else {
            newError.userName = null; // Clear the error for this field if valid
        }

        if (!loginData.password || loginData.password === '') {
            newError.password = 'Password is required';
            hasError = true;
        } else {
            newError.password = null; // Clear the error for this field if valid
        }

        setError(newError); // Update error state with new error messages
        return !hasError; // Return false if there are any errors
    };

    const handleSubmit = async () => {
        try {
            const isValid=validateLoginData();
            if(isValid){
                const response = await checkLoginSuccess(loginData);
                console.log('Login successful with data:', response);
            }
            else{
                console.log('Login fail with data:');
            }
        } catch (error) {
            console.error('Error while submitting the data:', error);
           // setError('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Unique Code"
                value={loginData.uniqueCode}
                onChange={(e) => setLoginData({ ...loginData, uniqueCode: e.target.value })}
            />
             {error.uniqueCode && <p style={{ color: 'red' }}>{error.uniqueCode}</p>}
            <input
                type="text"
                placeholder="Username"
                value={loginData.userName}
                onChange={(e) => setLoginData({ ...loginData, userName: e.target.value })}
            />
            {error.userName && <p style={{ color: 'red' }}>{error.userName}</p>}
            <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
};

export default LoginComponent;