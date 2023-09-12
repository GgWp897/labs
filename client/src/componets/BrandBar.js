import React, { useContext, useState } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Card, Dropdown, Row, Col } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleBrandSelection = (brand) => {
    device.setSelectedBrand(brand);
    toggleDropdown();
  };

  return (
    <div className="d-flex justify-content-center">
      <Dropdown show={dropdownOpen} onToggle={toggleDropdown} style={{marginTop: 10, marginBottom: -10}}>
        <Dropdown.Toggle variant="light" id="brand-dropdown" className="mb-2">
          {device.selectedBrand.name || 'Тип автомобиля'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {device.brands.map(brand => (
            <Dropdown.Item
              key={brand.id}
              active={brand.id === device.selectedBrand.id}
              onClick={() => handleBrandSelection(brand)}
            >
              {brand.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
});

export default BrandBar;
