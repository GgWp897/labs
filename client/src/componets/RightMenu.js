import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const Menu = observer(() => {
  const { device } = useContext(Context);

  const buttons = [
    { id: 1, name: 'статьи', path: '/articles' },
    { id: 2, name: 'калькулятор', path: '/Calculator' },
    { id: 3, name: 'наша команда', path: '/Team' },
    { id: 4, name: 'наши контакты', path: '/Contacts' }
  ];

  return (
    <ListGroup>
      {buttons.map((button, index) => (
        <Link key={button.id} to={button.path} style={{ textDecoration: 'none' }}>
          <ListGroup.Item
            action
            active={button.name === device.selectedType.name}
            style={{
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: 'grey',
              color: 'white',
              marginTop: 5,
              borderRadius: index === 0 ? '6px 6px 0 0' : index === buttons.length - 1 ? '0 0 6px 6px' : '0'
            }}
          >
            {button.name}
          </ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  );
});

export default Menu;
