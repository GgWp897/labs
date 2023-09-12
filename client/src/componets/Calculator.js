import React, { useState } from 'react';

const CarOwnershipCalculator = () => {
  const [annualInsurance, setAnnualInsurance] = useState('');
  const [annualMaintenance, setAnnualMaintenance] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState('');
  const [fuelPrice, setFuelPrice] = useState('');
  const [annualMileage, setAnnualMileage] = useState('');
  const [result, setResult] = useState('');

  const calculateCost = () => {
    const totalFuelCost = (parseFloat(fuelConsumption) * parseFloat(annualMileage) / 100) * parseFloat(fuelPrice);
    const totalCost = parseFloat(annualInsurance) + parseFloat(annualMaintenance) + totalFuelCost;
    setResult(totalCost.toFixed(2));
  };

  const calculatorContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px',
    margin: '0 auto',
    textAlign: 'center',
  };

  const titleStyle = {
    color: 'white',
  };

  const inputContainerStyle = {
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', // Set the width to 100%
  };

  const labelStyle = {
    color: 'white',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%', // Set the width to 100%
    border: '1px solid #1e1e1e',
    borderRight: '4px solid blue',
    padding: '5px',
    backgroundColor: '#1e1e1e',
    borderRadius: '10px',
    color: 'white'
  };

  const calculateButtonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  const resultTextStyle = {
    color: 'white',
    marginTop: '10px',
  };

  return (
    <div style={calculatorContainerStyle}>
      <h1 style={titleStyle}>Калькулятор стоимости владения автомобилем</h1>
      <div style={inputContainerStyle}>
        <label htmlFor="annualInsurance" style={labelStyle}>Годовая страховка:</label>
        <input
          type="number"
          id="annualInsurance"
          style={inputStyle}
          value={annualInsurance}
          onChange={(e) => setAnnualInsurance(e.target.value)}
        />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="annualMaintenance" style={labelStyle}>Годовое обслуживание:</label>
        <input
          type="number"
          id="annualMaintenance"
          style={inputStyle}
          value={annualMaintenance}
          onChange={(e) => setAnnualMaintenance(e.target.value)}
        />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="fuelConsumption" style={labelStyle}>Средний расход топлива на 100 км:</label>
        <input
          type="number"
          id="fuelConsumption"
          style={inputStyle}
          value={fuelConsumption}
          onChange={(e) => setFuelConsumption(e.target.value)}
        />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="fuelPrice" style={labelStyle}>Стоимость бензина за 1 литр:</label>
        <input
          type="number"
          id="fuelPrice"
          style={inputStyle}
          value={fuelPrice}
          onChange={(e) => setFuelPrice(e.target.value)}
        />
      </div>
      <div style={inputContainerStyle}>
        <label htmlFor="annualMileage" style={labelStyle}>Годовой пробег:</label>
        <input
          type="number"
          id="annualMileage"
          style={inputStyle}
          value={annualMileage}
          onChange={(e) => setAnnualMileage(e.target.value)}
        />
      </div>
      <button style={calculateButtonStyle} onClick={calculateCost}>Рассчитать</button>
      {result && <p style={resultTextStyle}>Общая стоимость владения автомобилем за год: {result}</p>}
    </div>
  );
};

export default CarOwnershipCalculator;
