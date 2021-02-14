import { useContext }  from 'react';
import styled          from 'styled-components';

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
            { user ? <div>{user.userName}</div> : <div>Header</div>}
        </HeaderStyle>
    )
};

export default Header;
