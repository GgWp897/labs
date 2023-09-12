import React, { useEffect, useState, useContext } from 'react';
import { Context } from '..';
import { getBasket, clearBasket } from '../http/deviceAPI';
import QRCode from 'qrcode.react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Basket = observer(() => {
  const { device } = useContext(Context);
  const [showQRCode, setShowQRCode] = useState(false);
  const [orderDetails, setOrderDetails] = useState('');

  useEffect(() => {
    getBasket().then(data => device.setBaskets(data));
  }, []);

  let prices = 0;
  device.basket.forEach(price => {
    prices += Number(price.device.price);
  });

  const handleCheckout = async () => {
    const itemCount = device.basket.length;  
    try {
      setShowQRCode(true);
      const orderDetails = device.basket.map(product => `${product.device.name}: ${product.device.price} рублей`);
      setOrderDetails(orderDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteOrder = async () => {
    try {
      await clearBasket();
      device.setBaskets([]);
      setShowQRCode(false);
      setOrderDetails('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="d-flex flex-sm-column justify-content-center align-items-center mt-3">
      <h1 className="pb-2" style={{color: 'white'}}>Заказ</h1>

      <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-2 mt-2">
      <h3 style={{ marginRight: '10px' }}>Итог:</h3>
  <h3>{prices}<span>руб.</span></h3>
      </Card>

      <Row className="d-flex justify-content-center" style={{ flexWrap: 'wrap' }}>
  {device.basket.map(product => (
    <Col key={product.id} sm={12} md={3} lg={4} xl={3} style={{ width: 150, marginBottom: 10 }}>
  <Card style={{marginLeft: '-50%', backgroundColor: "#999DA0", border: '2px solid #999DA0'}}>
    <div className="d-flex flex-row align-items-center">
      <img src={process.env.REACT_APP_API_URL + product.device.img} width={250} alt="Product" style={{ border: '2px solid black', borderRadius: 10 }} />
    </div>
    <div className="d-flex flex-row justify-content-end align-items-center">
      {/* Дополнительное содержимое карточки */}
    </div>
  </Card>
</Col>

  ))}
</Row>

      {!showQRCode && (
        <Button style={{backgroundColor: 'grey', border: '2px solid black'}} variant="primary" onClick={handleCheckout}>Показать QR-Code</Button>
      )}

{showQRCode && (
  <div>
    <QRCode value={orderDetails.join('\n')} />
    <Button variant="danger" className="mt-3" onClick={handleDeleteOrder}>Завершить</Button>
  </div>
)}
    </Container>
  );
});

export default Basket;
