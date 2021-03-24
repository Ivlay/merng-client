import { lazy, useContext } from 'react';
import { useQuery }         from '@apollo/client';
import { Link }             from 'react-router-dom';

import { GET_POSTS, IPost } from '@graphql/Post';
import { AuthContext }      from '@context/authContext';

import { SIGNUP }           from '@constants/routes';
import { PostWrapper }      from '@components/Post';

const Post = lazy(() => import('@components/Post'));

const LandignPage: React.FC = () => {
    const { user } = useContext(AuthContext);

    const { data, loading, error } = useQuery<{ getPosts: IPost[] }>(GET_POSTS);

    const renderPosts = () => {
        if (!loading && !error) {
            return (
                <PostWrapper>
                    {
                        data.getPosts.map(post =>
                            <Post
                                key={post.id}
                                { ...post }
                            />
                        )
                    }
                </PostWrapper>
            );
        }
    };

    return (
        <main>
            {renderPosts()}
            <Link to={SIGNUP}>Go to Signup</Link>
        </main>
    );
};

export default LandignPage;
