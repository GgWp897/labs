import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { Button, Image } from "react-bootstrap";
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import { logout } from "../http/userAPI";
import jwt_decode from "jwt-decode";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = async () => {
    await logout();
    user.setUser({});
    user.setIsAuth(false);
  };

  const token = localStorage.getItem('token');
  let isAdmin = false;
  if (token) {
    const decodedToken = jwt_decode(token);
    isAdmin = decodedToken.role === 'ADMIN';
  }

  return (
    <Navbar variant="dark" style={{ height: 70, backgroundColor: 'white' }}>
      <Container style={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <NavLink to={SHOP_ROUTE}>
          <Image width={60} height={60} src="https://yt3.googleusercontent.com/ytc/AGIKgqOzO3qwrcw-LudRchHg96Qj1Sfo0u7J8IYLpig=s900-c-k-c0x00ffffff-no-rj" />
        </NavLink>
        <div style={{ marginLeft: '63%' }}>
          <div style={{ color: "black", marginBottom: "1px" }}>часы работы: 9-21</div>
          <div style={{ color: "black" }}>без выходных</div>
        </div>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ marginLeft: "auto", color: "black" }}>
            {!isAdmin && <Button className="mr-5" style={{ marginRight: '2%', width: '150px', backgroundColor: 'white', color: 'black', border: '2px solid black' }} onClick={() => navigate(BASKET_ROUTE)}>Заказ наряды</Button>}
            {isAdmin && <Button className="mr-5" style={{ marginRight: '2%', width: '150px', backgroundColor: 'white', color: 'black', border: '2px solid black' }} onClick={() => navigate(ADMIN_ROUTE)}>Панель</Button>}
            <Button style={{ marginRight: '2%', backgroundColor: 'white', color: 'black', border: '2px solid black' }} onClick={() => logOut()}>Выйти</Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ marginLeft: "auto", color: "black" }}>
            <Button className="mr-5" style={{ marginRight: '2%', width: '150px', backgroundColor: 'white', color: 'black', border: '2px solid black' }} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
