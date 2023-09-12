import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
    const navigate = useNavigate();
    return (
        <Col md={3} className={"mt-3"} style={{ marginRight: '50px', marginBottom: '50px' }} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{ width: 300, cursor: 'pointer', backgroundColor: 'grey', border: '0.5px solid grey' }}>
                <Image width={280} height={150} style={{ marginTop: '3%', borderRadius: 5, marginLeft: '3%' }} src={process.env.REACT_APP_API_URL + device.img} />
                <div className="mt-1 d-flex justify-content-between align-items-center ">
                    <div style={{ marginLeft: 10, marginBottom: '1%', color: 'white' }}>{device.name}</div>
                    <div className="d-flex">
                    </div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;
