import React, { useState } from 'react';
import { Container, Button } from "react-bootstrap";
import CreateType from "../componets/modals/createType";
import CreateBrand from "../componets/modals/createBrend";
import CreateDevice from "../componets/modals/createDevice";
import DeleteDevice from "../componets/modals/deleteDevice";
import UpdateDevice from "../componets/modals/updateDevice";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button className="mt-2" style={{ backgroundColor: "rgb(9, 0, 43)" }} onClick={() => setTypeVisible(true)}>
        Добавить бренд
      </Button>
      <Button className="mt-2" style={{ backgroundColor: "rgb(9, 0, 43)" }} onClick={() => setBrandVisible(true)}>
        Добавить тип
      </Button>
      <Button className="mt-2" style={{ backgroundColor: "rgb(9, 0, 43)" }} onClick={() => setDeviceVisible(true)}>
        Добавить автомобиль
      </Button>
      <Button className="mt-2" style={{ backgroundColor: "rgb(9, 0, 43)" }} onClick={() => setDeleteVisible(true)}>
        Удалить автомобиль
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <DeleteDevice show={deleteVisible} onHide={() => setDeleteVisible(false)} />

      {/* Кнопка вызова модального окна UpdateDevice */}
      <Button
        className="mt-2"
        style={{ backgroundColor: "rgb(9, 0, 43)" }}
        onClick={() => setUpdateVisible(true)}
      >
        Обновить модель
      </Button>

      {/* Модальное окно обновления девайса */}
      <UpdateDevice show={updateVisible} onHide={() => setUpdateVisible(false)}/>
    </Container>
  );
};

export default Admin;
