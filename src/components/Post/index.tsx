import styled    from 'styled-components';

import { IPost } from '@graphql/Post';
import useDate   from '@hooks/useDate';

export const PostWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    grid-auto-rows: minmax(100px, auto);
    margin: 15px 0;

    @media(max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const PostStyle = styled.article`
    border: 1px solid ${props => props.theme.border};
    border-radius: 8px;
    padding: 15px;

    p {
        margin: 0;
    }

    p + p {
        margin-top: 10px;
    }
    
    .userName {
        font-weight: 700;
    }

    .text {
        margin-bottom: 15px;
    }

    .date {
        font-size: 11px;
        opacity: 0.7;
    }

    span + span {
        margin-left: 10px;
    }
`;

const Post: React.FC<IPost> = (post: IPost) => {
    const { date } = useDate(Date.parse(post.createdAt));

    return (
        <PostStyle>
            <p className='userName'>{post.userName}</p>
            <p className='date'>{date}</p>
            <p className='text'>{post.body}</p>
            <div>
                <span>{`likes: ${post.likeCount}`}</span>
                <span>{`comments: ${post.commentCount}`}</span>
            </div>
        </PostStyle>
    );
};

export default Post;
