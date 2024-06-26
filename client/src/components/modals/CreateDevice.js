import React, { useState } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../../index.js';

const CreateDevice = ({ show, onHide }) => {
    const { device } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((i) => i.number !== number));
    };

    const selectFile = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <Modal size="lg" centered show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Добавить устройства</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map((type) => (
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map((brand) => (
                                <Dropdown.Item
                                    onClick={() => device.setSelectedBrand(brand)}
                                    key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder={'Введите название устройства'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder={'Введите стоимость устройства'}
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                    />
                    <Form.Control className="mt-3" type="file" onChange={selectFile} />
                    <hr />
                    <Button variant={'outline-dark'} onClick={addInfo}>
                        Добавить новое свойство
                    </Button>
                    {info.map((i) => (
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control placeholder={'Введите название свойства'} />
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder={'Введите описание свойства'} />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={'outline-danger'}>
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={onHide}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;
// 2:01:56
