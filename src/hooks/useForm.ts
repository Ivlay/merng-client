import { useState } from 'react';

export const useForm = <T>(func: () => void, initialState: T) => {
    const [values, setValues] = useState(initialState);

    const handleInputvalue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        func();
    };

    return {
        handleSubmitForm,
        handleInputvalue,
        values
    };
};
