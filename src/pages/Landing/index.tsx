import { lazy, useContext } from 'react';
import { useQuery }         from '@apollo/client';
import { Link }             from 'react-router-dom';

import { GET_POSTS, IPost } from '@graphql/Post';
import { AuthContext }      from '@/context/authContext';

import { SIGNUP }           from '@constants/routes';

const Post = lazy(() => import('@components/Post'));

const LandignPage: React.FC = () => {
    const { user } = useContext(AuthContext);

    const { data, loading } = useQuery<{ getPosts: IPost[] }>(GET_POSTS);
    return (
        <>
            {!loading && (
                data.getPosts.map(post =>
                    <Post
                        key={post.id}
                        {...post}
                    />
                )
            )}
            <Link to={SIGNUP}>Go to Signup</Link>
        </>
    );
};

export default LandignPage;
