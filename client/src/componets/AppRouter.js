import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../index';
import Calculator from './Calculator';
import Contacts from './Contacts';
import PhotoGallery from './Team';
const AppRouter = () => {
  const { user } = useContext(Context);

  console.log(user);

  return (
    <>
      <Routes>
        {user.isAuth &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/team" element={<PhotoGallery />} />

        <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
      </Routes>
    </>
  );
};

export default AppRouter;
