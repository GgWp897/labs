import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./componets/AppRouter";
import NavBar from "./componets/NavBar";
import Foother from "./componets/Foother";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(true);
          user.setIsAuth(true);
        })
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#999DA0" }}>
        <NavBar />
        <AppRouter />
        <Foother style={{ position: "fixed", bottom: 0, left: 0, right: 0 }} />
      </div>
    </BrowserRouter>
  );
});

export default App;
