import styled from 'styled-components';

import loader from '@assets/buttonLoader.svg';

const ButtonStyle = styled.button<Pick<IButton, 'isLoading' | 'isActive' | 'isDisabled'>>`
    position: relative;
    height: 48px;
    border-radius: 8px;
    width: 178px;

    background-image: linear-gradient(
        312.44deg, ${props => props.theme.button.gradient[1]} 0%,
        ${props => props.theme.button.gradient[1]} 100%
    );

    color: ${props => props.theme.button.color};
    cursor: ${props => !props.isActive || props.isDisabled ? 'default' : 'pointer'};
    font-weight: 700;
    text-transform: uppercase;
    
    &::after {
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: calc(50% - 10px);
        background-image: url(${(props => props.isLoading ? loader : '')});
    }
`;

interface IButton {
    className?  : string;
    label       : string;
    isLoading?  : boolean;
    isActive?   : boolean;
    isDisabled? : boolean;
    onClick?    : () => void;
};

const Button: React.FC<IButton> = ({
    label,
    isLoading = false,
    isActive = true,
    isDisabled = false,
    onClick,
    className
}) => {
    const handleButtonClick = () => {
        if (isActive && !isLoading && !isDisabled && onClick) onClick();
    };

    return (
        <ButtonStyle
            isLoading = {isLoading}
            isActive  = {isActive}
            disabled  = {isDisabled}
            className = {className}
            onClick   = {handleButtonClick}
        >
            <span>
                {label}
            </span>
        </ButtonStyle>
    );
};

export default Button;
