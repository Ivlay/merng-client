import { useParams } from 'react-router-dom';

const PostPage: React.FC = () => {
    const { postId } = useParams();
    
    return <div>Post ID: {postId ?? 'fiva'}</div>
};

export default PostPage;
