declare module '*.less';
declare module "*.json"
declare module "*.png";
declare module "*.svg";

type TRoutes = 'postId' | 'userName';

export module 'react-router-dom' {
    function useParams(): Record<TRoutes, string>;
};
