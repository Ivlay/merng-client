import styled from 'styled-components';

const InputStyle = styled.input`
    height: 48px;
    width: 100%;
    border: 1px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: transparent;
    border-radius: 8px;
    padding: 9px 16px;
`;

interface IInput {
    type        : 'password' | 'text' | 'email';
    name        : string;
    placeholder : string;
    value       : string;
    onChange    : (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorText   : string;
};

const Input: React.FC<IInput> = ({ type, name, placeholder, value, onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e);

    return (
        <InputStyle
            type        = {type}
            name        = {name}
            placeholder = {placeholder}
            value       = {value}
            onChange    = {handleInputChange}
        />
    );
};

export default Input;