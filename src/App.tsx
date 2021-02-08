import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import { hot }            from 'react-hot-loader/root'

import LandignPage        from '@pages/Landing';
import LoginPage          from '@pages/Login';
import SignUpPage         from '@pages/SignUp';
import PostPage           from '@pages/Post';
import UserPage           from '@pages/UserPage';
import MainLayout         from '@layouts/MainLayout';

import * as appRoutes     from '@constants/routes';

const App = () => {
    return (
        <MainLayout>
            <Router>
                <Switch>
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
                </Switch>
            </Router>
        </MainLayout>
    );
};

export default hot(App);
