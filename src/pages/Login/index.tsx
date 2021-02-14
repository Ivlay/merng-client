import { useContext }          from 'react';
import { useMutation }         from '@apollo/client';

import { AuthContext }         from '@context/authContext';
import { useForm }             from '@/hooks/useForm';
import { LOGIN_USER }          from '@/graphql/User';
import { IUser }               from '@stores/authReducer';

import Input                   from '@components/UI/Input';

import { Form, FormContainer } from '@/styled/formStyle';

const LoginPage: React.FC = () => {
    const { handleInputvalue, values, handleSubmitForm } = useForm(handleSubmit, { password: '', userName: '' });

    const { login } = useContext(AuthContext);

    const [ handleLogin, { loading } ] = useMutation<{login: IUser}>(LOGIN_USER, {
        update(_proxy, result) {
            login(result.data.login)
        },
        onError(err) {
            //TODO: add response errors
            console.log(err.graphQLErrors[0].extensions.errors)
        },
        variables: values
    });

    function handleSubmit() {
        if (!loading) {
            handleLogin();
        };
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmitForm}>
                <Input
                    name        = 'userName'
                    value       = {values.userName}
                    placeholder = 'User name'
                    type        = 'text'
                    onChange    = {handleInputvalue}
                    errorText   = ''
                />
                <Input
                    name        = 'password'
                    value       = {values.password}
                    placeholder = 'Password'
                    type        = 'password'
                    onChange    = {handleInputvalue}
                    errorText   = ''
                />
                <button>Login</button>
            </Form>
        </FormContainer>
    );
};

export default LoginPage;
