type TRoutes = 'postId' | 'userName';

export module 'react-router-dom' {
    export function useParams(): Record<TRoutes, string>;
}
