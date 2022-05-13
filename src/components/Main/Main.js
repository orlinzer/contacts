import React, { useState } from 'react';
// import Book from '../book/book';

import Button from '../Button/Button';

import style from './Main.module.css';

// import maLife from '../../images/lsx9h.jpg';
// import hairy from '../../images/9eb0535382da31a1d80fcc4078481849.jpg';
import uuid from 'react-uuid';
// import { BsBook } from 'react-icons/bs';
import { Card } from '../Card/Card';
import Avatar from '../Avatar/Avatar';
import Menu from '../Menu/Menu';

export const Main = (props) => {

  const { children } = props;

  const [counter, setCounter] = useState(0);

  // const books = ['Button 1', 'Button 2', 'Button 3'];
  // const booksElements = books.map(book => <Book key={uuid()} />)

  // function counterGrow() {
  //   setCounter((oldCounter) => oldCounter + 1);
  // }

  // function counterShrink() {
  //   setCounter((oldCounter) => oldCounter - 1);
  // }

  // function counterReset() {
  //   setCounter(0);
  // }

  return (
    <main
      className={style.main}
    >
      { children }

      {/* <p>In Main</p> */}

      {/* <Card>
        <Avatar></Avatar>
        <Avatar name="Or Linzer" />
        <Avatar name="Or Linzer" borderWidth="1px"/>
        <Avatar name="Hillal Shrkawi" color="#77f" />
      </Card> */}

      {/* <Card>
        <p>{counter}</p>
        <Button onClick={counterGrow}>+</Button>
        <Button onClick={counterShrink}>-</Button>
        <Button onClick={counterReset}>reset</Button>
      </Card> */}

      <Menu />

      {/* <Book author='Or' title='My Life Be Like' year='1991' description='ooh ahh' cover={maLife} />
      <Book author='GC Rolling Stones' title='Hairy Poter' year='1997' description='The same thing but with hair' cover={hairy} />
      <BsBook className='book-icon'/> */}
    </main>
  );
};

export default Main;
