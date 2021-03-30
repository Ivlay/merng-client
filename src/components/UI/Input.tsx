import styled from 'styled-components';

const InputStyle = styled.input`
    height: 48px;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${props => props.theme.color};
    color: ${props => props.theme.color};
    background-color: transparent;
    padding: 9px 16px;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: color 9999s ease-out, background-color 9999s ease-out;
        transition-delay: 9999s;
    }

    &:focus {
        outline: none;
        border-color: ${props => props.theme.button.gradient[1]};
        box-shadow: 0 23px 32px -22px ${props => props.theme.button.gradient[1]}
    }
`;

type TInputName =
    | 'password'
    | 'confirmPassword'
    | 'email'
    | 'userName';

interface IInput {
    type        : 'password' | 'text' | 'email';
    className?  : string;
    name        : TInputName;
    placeholder : string;
    value       : string;
    onChange    : (e: React.ChangeEvent<HTMLInputElement>) => void;
    errorText   : string;
}

const Input: React.FC<IInput> = ({ type, name, placeholder, value, onChange, className }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e);

    const autocomplete = name === 'password' || name === 'confirmPassword' ? 'new-password' : '';

    return (
        <InputStyle
            type         = {type}
            className    = {className}
            name         = {name}
            placeholder  = {placeholder}
            value        = {value}
            onChange     = {handleInputChange}
            autoComplete = {autocomplete}
        />
    );
};

export default Input;
