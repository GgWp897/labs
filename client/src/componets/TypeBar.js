import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup >
      {device.types.map(type => (
        <ListGroup.Item
          key={type.id}
          action
          active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          style={{ cursor: 'pointer', fontWeight: 'bold', backgroundColor: 'grey', color: 'white', marginTop:5 }}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
