import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';
import { hot }              from 'react-hot-loader/root';

import * as appRoutes       from '@constants/routes';

import { useLocaleStorage } from './hooks/useLocaleStorage';
import { AuthProvider }     from './context/authContext';

import LandignPage          from '@pages/Landing';
import LoginPage            from '@pages/Login';
import SignUpPage           from '@pages/SignUp';
import PostPage             from '@pages/Post';
import UserPage             from '@pages/UserPage';
import MainLayout           from '@layouts/MainLayout';


const App = () => {
    const { storedItem } = useLocaleStorage<string>('AUTH_TOKEN');

    return (
        <AuthProvider>
            <MainLayout>
                <Router>
                    <Switch>
                        {storedItem && <Redirect from={appRoutes.LOGIN} to={appRoutes.LANDING} exact/>}
                        {storedItem && <Redirect from={appRoutes.SIGNUP} to={appRoutes.LANDING} exact/>}
                        <Route path={appRoutes.LANDING} exact>
                            <LandignPage />
                        </Route>
                        <Route path={appRoutes.LOGIN} exact>
                            <LoginPage />
                        </Route>
                        <Route path={appRoutes.SIGNUP} exact>
                            <SignUpPage />
                        </Route>
                        <Route path={appRoutes.POST} exact>
                            <PostPage />
                        </Route>
                        <Route path={appRoutes.USER} exact>
                            <UserPage />
                        </Route>
                        <Redirect from='/*' to={appRoutes.LANDING} exact/>
                    </Switch>
                </Router>
            </MainLayout>
        </AuthProvider>
    );
};

export default hot(App);
