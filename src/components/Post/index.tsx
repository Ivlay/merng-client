import { IPost } from '@graphql/Post';

const Post: React.FC<IPost> = (post: IPost) => {
    return (
        <div>
            <p>{post.body}</p>
            <p>{post.userName}</p>
            <p>{post.id}</p>
        </div>
    );
};

export default Post;
