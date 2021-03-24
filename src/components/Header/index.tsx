import { useContext }  from 'react';
import styled          from 'styled-components';
import { Link }        from 'react-router-dom';

import { LANDING }     from '@constants/routes';

import { AuthContext } from '@/context/authContext';

const HeaderStyle = styled.header`
    display: flex;
    align-items: center;
    height: 48px;
`;

const Header: React.FC = () => {
    const { user } = useContext(AuthContext);

    return (
        <HeaderStyle>
            {user ? <div>{user.userName}</div> : <Link to={LANDING}>Header</Link>}
        </HeaderStyle>
    );
};

export default Header;
