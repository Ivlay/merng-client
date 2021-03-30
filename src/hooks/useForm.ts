import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
    const [values, setValues] = useState(initialState);

    const handleInputvalue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    return {
        handleInputvalue,
        values
    };
};
