import React, { useContext } from "react";
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import { Button, Image } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";

const Foother = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();


  return (
    <Navbar bg="light" variant="dark" style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 65 }}>
      <Container style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "black", fontSize: "24px", marginRight: -280 }}>©Brooklands.com</span>
      </Container>
        
      <Image
        src="https://cdn-icons-png.flaticon.com/512/145/145813.png?w=826&t=st=1687185079~exp=1687185679~hmac=06b7d0ee69db2865763f6d4824b5d7a0e9a857c2e58b981995d8c6c2a908664b"
        style={{width: "50px", height: "50px", marginRight: 20 }}
      />
      <Image
        src="https://cdn-icons-png.flaticon.com/512/174/174855.png?w=826&t=st=1687185109~exp=1687185709~hmac=0a0933c0cc162690f9166c75976683012f7be0e5f7ebd06c4f9c7651ed17d696"
        style={{width: "50px", height: "50px", marginRight: 20 }}
      />
      <Image
        src="https://cdn-icons-png.flaticon.com/512/355/355977.png?w=826&t=st=1687185150~exp=1687185750~hmac=ed794df88b6e811c9e6bd3b7c81bddfa1f78dd5e2b52809f216b395ae249b915"
        style={{width: "50px", height: "50px", marginRight: 90 }}
      />
    </Navbar>
  );
});

export default Foother;
