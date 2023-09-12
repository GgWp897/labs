import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
      try{
        let data;
        if (isLogin) {
          data = await login(email, password)
        } else {
          data = await registration(email, password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        navigate(SHOP_ROUTE)
      } catch (e) {
        alert(e.response.data.message)

      }

    }

  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const updateContainerHeight = () => {
      const height = window.innerHeight - 54;
      setContainerHeight(height);
    };

    updateContainerHeight();

    window.addEventListener("resize", updateContainerHeight);

    return () => {
      window.removeEventListener("resize", updateContainerHeight);
    };
  }, []);

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: containerHeight }}
    >
        <Card style={{width: 600}} className="p-5">
            <h2 className="m-auto">{isLogin ? 'Авторизация': 'Регистрация'}</h2>
          <Form className="d-flex flex-column">
                <Form.Control
                    className="mt-4"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className="mt-4"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Row className="d-flex justify-content-between mt-2">
                {isLogin ? 
                <div>
                    <NavLink to = {REGISTRATION_ROUTE}>Регистрация</NavLink>
                </div>
                :
                <div>
                    <NavLink to = {LOGIN_ROUTE}>Войдите</NavLink>
                </div>
}
                <Button 
                    className="mt-3 align-self-end" 
                    variant={"outline-success"}
                    onClick={click}
                >
                    {isLogin ? 'Войти' : 'Регистрация'}
                </Button>
                </Row>

          </Form>
        </Card>
     
    </Container>
  );
});

export default Auth;
