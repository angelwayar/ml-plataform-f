"use client"
import { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must used within a provider');

    return context;
}

export const UserProvider = ({ children }) => {
    const [token, setToken] = useLocalStorage();

    const saveToken = (newtoken) => {
        setToken(newtoken)
    }

    return (
        <UserContext.Provider
            value={{
                token,
                saveToken
            }}
        >
            {children}
        </UserContext.Provider>
    );
}
