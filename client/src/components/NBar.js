import React from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';

import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE } from '../utils/consts';

const NBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
                    DeviceShop
                </NavLink>
                {user.isAuth ? (
                    <Nav className="me-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>
                            Admin
                        </Button>
                        <Button
                            variant={'outline-light'}
                            className="ml-4"
                            onClick={() => navigate(LOGIN_ROUTE)}>
                            Log out
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="me-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>
                            Register
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NBar;
