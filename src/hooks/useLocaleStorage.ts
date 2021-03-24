import { useState } from 'react';

export const useLocaleStorage = <T>(key: string) => {
    const [storedItem, setStoredItem] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);

            return item ? JSON.parse(item) : '';
        } catch (error) {
            return '';
        }
    });

    const setItem = (value: T) => {
        try {
            const valueToStore = value instanceof Function ? value(storedItem) : value;

            setStoredItem(value);

            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };

    const removeItem = () => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    };

    const clearStorage = () => {
        try {
            localStorage.clear();
        } catch (error) {
            console.log(error);
        }
    };

    return { storedItem, setItem, removeItem, clearStorage };
};
