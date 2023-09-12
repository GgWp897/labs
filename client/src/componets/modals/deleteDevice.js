import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { deleteDevice } from '../../http/deviceAPI';

const DeleteDeviceModal = ({ show, onHide }) => {
  const [deviceId, setDeviceId] = useState('');

  const handleDelete = async () => {
    try {
      await deleteDevice(deviceId);
      // Дополнительная логика, если требуется после удаления модели
      onHide(); // Закрываем модальное окно после успешного удаления
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Удалить модель</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="deviceId">ID модели</label>
            <input
              type="text"
              className="form-control"
              id="deviceId"
              value={deviceId}
              onChange={(e) => setDeviceId(e.target.value)}
            />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Отмена</Button>
        <Button variant="danger" onClick={handleDelete}>Удалить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteDeviceModal;
