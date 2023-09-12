import React from 'react';

const Blubox = () => {
  const phoneNumber = '+7(968)-747-07-41';
  const address = 'Очаково 12Б';
  const email = 'exemple11@gmail.com';

  return (
    <div className="blubox">
      <div className="blubox-content">
        <p className="blubox-text" style={{ fontSize: '18px', lineHeight: '30px' }}>Телефон: {phoneNumber}</p>
        <p className="blubox-text" style={{ fontSize: '18px', lineHeight: '30px' }}>Адрес: {address}</p>
        <p className="blubox-text" style={{ fontSize: '18px', lineHeight: '30px' }}>Почта: {email}</p>
      </div>
    </div>
  );
};

const Whitebox = () => {
  const phoneNumber = '+7(999)-123-45-67';
  const address = 'Невский проспект 1';
  const email = 'exemple58@gmail.com';

  return (
    <div className="whitebox">
      <div className="whitebox-content">
        <p className="whitebox-text" style={{ fontSize: '18px', lineHeight: '30px' }}>Телефон: {phoneNumber}</p>
        <p className="whitebox-text" style={{ fontSize: '18px', lineHeight: '30px' }}>Адрес: {address}</p>
        <p className="whitebox-text" style={{ fontSize: '18px', lineHeight: '30px' }}>Почта: {email}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <div className="blueBox">
        <p className="location" style={{ fontSize: '22px' }}><b>Москва</b></p>
        <Blubox />
      </div>
      <div className="whiteBox">
        <p className="location" style={{ fontSize: '22px' }}><b>Санкт-Петербург</b></p>
        <Whitebox />
      </div>
    </div>
  );
};

const styles = `
  .container {
    display: flex;
    justify-content: space-between;
  }

  .blueBox {
    width: 350px;
    height: 150px;
    border-left: 5px solid black;
    margin-top: 350px;
    padding: 10px;
    border-radius: 10px;
  }
  

  .whiteBox {
    width: 350px;
    height: 150px;
    border-left: 5px solid black;
    margin-top: 350px;
    padding: 10px;
    border-radius: 10px;
  }

  .location {
    color: white;
    text-align: center;
    margin: 0;
    padding: 5px;
    background-color: black;
    border-radius: 15px;
  }

  .blubox,
  .whitebox {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow: hidden;
  }

  .blubox-content,
  .whitebox-content {
    height: calc(100% - 30px); 
    overflow: auto;
  }

  .blubox-text,
  .whitebox-text {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
`;

const AppWithStyles = () => (
  <>
    <style>{styles}</style>
    <App />
  </>
);

export default AppWithStyles;
