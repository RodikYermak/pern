import React from 'react';
import { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';

import { observer } from 'mobx-react-lite';

const NBar = observer(() => {
    const { user } = useContext(Context);

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
                    DeviceShop
                </NavLink>
                {user.isAuth ? (
                    <Nav className="me-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'}>Admin</Button>
                        <Button variant={'outline-light'} className="ml-4">
                            Login
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
