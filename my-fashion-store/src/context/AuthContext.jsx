import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/login', { email, password });
            setUser({ email });
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        }
    };

    const register = async (name, email, password) => {
        try {
            await axios.post('/api/register', { name, email, password });
        } catch (error) {
            console.error('Error registering:', error);
            throw error;
        }
    };

    const logout = () => {
        setUser(null);
    };

    useEffect(() => {
        // Cargar el usuario desde localStorage si hay un token guardado
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
