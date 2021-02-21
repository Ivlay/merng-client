type TRoutes = 'postId' | 'userName';

export module 'react-router-dom' {
    function useParams(): Record<TRoutes, string>;
};
