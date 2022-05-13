import React from 'react';
import { MdMenu, MdOutlineClose } from 'react-icons/md'

import Button from '../Button/Button';
import { MenuContext } from '../Menu/Menu';
import {Avatar} from '../Avatar/Avatar';

import style from './Header.module.css';

export const Header = (props) => {
  const { onToggleMenu } = props;

  return (
    <header
      className={style.header}
    >
      <MenuContext.Consumer>
        {menu => (
          <Button
            icon={menu ? <MdOutlineClose/> : <MdMenu/>}
            onClick={onToggleMenu}
            size='2em'
            backgroundColor='transparent'
            margin='0'
            padding='0'
          />
        )}
      </MenuContext.Consumer>
      <h1 style={{
        margin: 0,
        fontSize: '1.5em',
      }}
      >
        Functional component
      </h1>
      <Avatar></Avatar>
    </header>
  );
}

export default Header;
