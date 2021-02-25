import { gql } from '@apollo/client';

export interface IPost {
    body         : string;
    commentCount : number;
    comments     : Pick<IPost, 'body' | 'createdAt' | 'id' | 'userName'>[];
    createdAt    : string;
    id           : string;
    likeCount    : number;
    likes        : Pick<IPost, 'userName' | 'createdAt' | 'id'>[];
    userName     : string;
};

export const GET_POSTS = gql`
    {
        getPosts {
            body
            id
            userName
            commentCount 
            comments {
                id
                userName
                createdAt
                body
            }
            likeCount
            likes {
                userName
            }
            createdAt
        }
    }
`;
