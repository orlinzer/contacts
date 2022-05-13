import React from 'react';

import Button from '../Button/Button';

import style from './Footer.module.css';

export function Footer () {
  return (
    <footer
      className={style.footer}
    >
      <p className='footer'>&copy; { new Date().getFullYear() } Or Linzer</p>

      <Button>Button on Footer</Button>
    </footer>
  );
}

export default Footer;
