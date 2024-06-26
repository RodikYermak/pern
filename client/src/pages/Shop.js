import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../index';
import { fetchTypes, fetchBrand, fetchDevice } from '../http/deviceAPI';

const Shop = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrand().then((data) => device.setBrands(data));
        fetchDevice().then((data) => device.setDevices(data.rows));
    }, []);

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
