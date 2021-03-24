import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect
} from 'react-router-dom';
import { lazy, Suspense }   from 'react';

import * as appRoutes       from '@constants/routes';

import { useLocaleStorage } from './hooks/useLocaleStorage';
import { AuthProvider }     from './context/authContext';
import MainLayout           from '@layouts/MainLayout';

const LandingPage = lazy(() => import('@pages/Landing'));
const LoginPage   = lazy(() => import('@pages/Login'));
const SignUpPage  = lazy(() => import('@pages/SignUp'));
const PostPage    = lazy(() => import('@pages/Post'));
const UserPage    = lazy(() => import('@pages/UserPage'));

const App = () => {
    const { storedItem } = useLocaleStorage<string>('AUTH_TOKEN');

    return (
        <AuthProvider>
            <Router>
                <MainLayout>
                    <Suspense fallback={null}>
                        <Switch>
                            {storedItem && <Redirect from={appRoutes.LOGIN} to={appRoutes.LANDING} exact/>}
                            {storedItem && <Redirect from={appRoutes.SIGNUP} to={appRoutes.LANDING} exact/>}
                            <Route path={appRoutes.LANDING} exact>
                                <LandingPage />
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
                    </Suspense>
                </MainLayout>
            </Router>
        </AuthProvider>
    );
};

export default App;
