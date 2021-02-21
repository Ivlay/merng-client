import styled from 'styled-components';

export const FormContainer = styled.div`
    max-width: 530px;
    box-sizing: content-box;
    text-align: center;
    width: 100%;
    padding: 48px;
    margin: 0 auto;

    @media(max-width: 768px) {
        padding: 0;
    }
`;

export const Form = styled.form`
    input {
        margin-bottom: 25px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;
