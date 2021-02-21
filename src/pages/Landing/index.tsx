import { lazy, useContext } from 'react';
import { Link }             from 'react-router-dom';

import { SIGNUP }           from '@constants/routes';
import { AuthContext }      from '@/context/authContext';

const Post = lazy(() => import('@components/Post'));

const LandignPage: React.FC = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {!user && <Post />}
            <Link to={SIGNUP}>Go to Signup</Link>
        </>
    );
};

export default LandignPage;
