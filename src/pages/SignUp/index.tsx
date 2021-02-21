import { REGISTER_USER }       from '@/graphql/User';
import { useForm }             from '@/hooks/useForm';
import { useMutation }         from '@apollo/client';

import Input                   from '@components/UI/Input';

import { Form, FormContainer } from '@/styled/formStyle';
import Button from '@/components/UI/Button';

const SignUpPage: React.FC = () => {
    const { handleInputvalue, values, handleSubmitForm } = useForm(
        handleSubmit,
        {
            userName        : '',
            email           : '',
            password        : '',
            confirmPassword : ''
        });

    const [ signUp, { loading } ] = useMutation(REGISTER_USER, {
        update(_poxy, result) {
            console.log(result)
        },
        onError(err) {
            console.log(err.graphQLErrors[0].extensions.errors);
        },
        variables: values
    });

    function handleSubmit() {
        if (!loading) {
            signUp();
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
                    name        = 'email'
                    value       = {values.email}
                    placeholder = 'Email'
                    type        = 'email'
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
                <Input
                    name        = 'confirmPassword'
                    value       = {values.confirmPassword}
                    placeholder = 'Confirm Password'
                    type        = 'password'
                    onChange    = {handleInputvalue}
                    errorText   = ''
                />
                <Button
                    label     = 'Sign Up'
                    isLoading = {loading}
                />
            </Form>
        </FormContainer>
    );
};

export default SignUpPage;
