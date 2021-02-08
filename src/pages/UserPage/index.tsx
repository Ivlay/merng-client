import { useParams } from 'react-router-dom';

const UserPage: React.FC = () => {
    const { userName } = useParams();
    return <div>UserPage info about: {userName}</div>
};

export default UserPage;