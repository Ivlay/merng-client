import { lazy, Suspense } from 'react';
import { Link }           from 'react-router-dom';

import { SIGNUP }         from '@constants/routes';

const Post = lazy(() => import('@components/Post'));

const LandignPage: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <Post />
            <Link to={SIGNUP}>Go to Signup</Link>
        </Suspense>
    );
};

export default LandignPage;
