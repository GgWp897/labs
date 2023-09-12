import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateDevice, fetchOneDevice } from '../../http/deviceAPI';

const UpdateDeviceModal = ({ show, onHide }) => {
  const [deviceId, setDeviceId] = useState('');
  const [deviceData, setDeviceData] = useState({
    price: 0,
    // Другие поля девайса для обновления
  });

  useEffect(() => {
    if (!show) {
      setDeviceId('');
      setDeviceData({
        price: 0,
        // Сбрасываем другие поля девайса
      });
    }
  }, [show]);

  const fetchDeviceData = async () => {
    try {
      const device = await fetchOneDevice(deviceId);
      setDeviceData({
        price: device.price,
        // Устанавливаем другие поля девайса
      });
    } catch (error) {
      console.error('Failed to fetch device data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDeviceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateDeviceData = async () => {
    try {
      const updatedDevice = await updateDevice(deviceId, deviceData);
      console.log('Device updated:', updatedDevice);
      onHide();
    } catch (error) {
      console.error('Failed to update device:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Обновить девайс</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formDeviceId">
            <Form.Label>ID девайса</Form.Label>
            <Form.Control
              type="text"
              name="deviceId"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formDevicePrice">
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={deviceData.price}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* Добавьте другие поля девайса для обновления */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={fetchDeviceData}>
          Получить данные
        </Button>
        <Button variant="outline-primary" onClick={updateDeviceData}>
          Обновить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateDeviceModal;
