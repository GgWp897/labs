import React, { useEffect, useState, useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useParams, useNavigate } from 'react-router-dom';
import { addToBasket, fetchOneDevice } from "../http/deviceAPI";
import { Context } from "../index";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(Context);

  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data));
  }, [id]);

  const add = () => {
    if (!user) {
      navigate("/login"); // Redirect to login page if the user is not authenticated
      return;
    }

    const formData = new FormData();
    formData.append('deviceId', id);
    addToBasket(formData)
      .then(response => {
        alert(`Товар ${device.name} был добавлен в вашу корзину!`);
      })
      .catch(error => {
        alert('Произошла ошибка при добавлении товара в корзину.');
      });
  };

  const renderBuyButton = () => {
    if (user && user.isAuth) {
      return (
        <Button style={{ fontSize: 35, backgroundColor: 'grey', border: '3px solid black' }} onClick={add}>Заказать</Button>
      );
    } else {
      return (
        <Button style={{ fontSize: 20, width: 150 }} onClick={() => navigate('/login')}>Войти, чтобы купить</Button>
      );
    }
  };

  return (
    <Container className="mt-3" >
      <Row>
        <Col md={4}>
          <Image width={600} height={300} src={process.env.REACT_APP_API_URL + device.img} style={{borderRadius: 10, border: '3px solid black'}} />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2 className="mt-5" style={{marginLeft: '230px', color: 'white'}}>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center" style={{ marginRight: 220, fontSize: 65 }}>
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="d-flex flex-column align-items-center justify-content-around" style={{ width: 300, height: 300, backgroundColor:'grey', border: '3px solid black' }}>
          <h2 style={{color: 'white'}}>От {device.price ? device.price + ' руб.' : ''}</h2>
            {renderBuyButton()}
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1 style={{color:'white'}}>Характеристики</h1>
        {device.info.map((info, index) =>
          <Row key={info.id} style={{ background: index % 2 === 0 ? 'grey' : 'transparent', padding: 10, color: 'white', borderRadius: 5 }}>
            {info.title}:{info.description}
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default DevicePage;
