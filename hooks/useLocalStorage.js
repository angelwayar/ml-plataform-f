import { useState, useEffect } from "react";

export function useLocalStorage() {
    const [state, setState] = useState(null);

    // Si hay un token guardado este se recupera
    useEffect(() => {
        const item = localStorage.getItem('token');
        const token = JSON.parse(item);
        if (token) {
            setState(token);
        }
    }, []);

    // Si el token se actualizo o se
    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(state));
    }, [state]);

    return [state, setState];
}