import { useContext }          from 'react';
import { useMutation }         from '@apollo/client';

import { useForm }             from '@hooks/useForm';

import { LOGIN_USER, IUser }   from '@graphql/User';
import { AuthContext }         from '@context/authContext';


import Input                   from '@components/UI/Input';
import Button                  from '@components/UI/Button';

import { Form, FormContainer } from '@styled/formStyle';

const LoginPage: React.FC = () => {
    const { handleInputvalue, values, handleSubmitForm } = useForm(handleSubmit, { password: '', userName: '' });

    const { login } = useContext(AuthContext);

    const [handleLogin, { loading }] = useMutation<{login: IUser}>(LOGIN_USER, {
        update(_proxy, result) {
            login(result.data.login);
        },
        onError(err) {
            // TODO: add response errors
            console.log(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    });

    function handleSubmit() {
        if (!loading) {
            handleLogin();
        }
    }

    return (
        <FormContainer>
            <Form onSubmit={handleSubmitForm}>
                <Input
                    name        = 'userName'
                    value       = {values.userName}
                    placeholder = 'Name'
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
                <Button
                    label     = 'Login'
                    isLoading = {loading}
                />
            </Form>
        </FormContainer>
    );
};

export default LoginPage;
