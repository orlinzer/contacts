import { createContext, Fragment, useState } from "react";
import { MdOutlineHome } from 'react-icons/md';
import { Link } from "../Link/Link";
import uuid from "react-uuid";

import styles from './Menu.module.css';

export const MenuContext = createContext(false);

export const Menu = (props) => {

  // const [open, setOpen] = useState(propsOpen ? true : false);
  const [elements, setElements] = useState([
    {
      name: 'Home',
      icon: <MdOutlineHome/>,
      href: '/'
    },
    {
      name: 'About',
      icon: <MdOutlineHome/>,
      href: '/about'
    },
  ]);

  // if (menuOpen) { return <></>; }

  return (

    <MenuContext.Consumer>
      {menu => (
        menu ? (
          <Fragment>
            <div className={styles.menuBackground}></div>
            <nav className={styles.menu}>
              <ul className={styles.menuList}>
                {elements.map(e => (
                  <li
                    className={styles.menuListElement}
                    key={uuid()}
                  >
                    <Link href={e.href} className={styles.menuLink}>
                    {/* <Link href={e.href}> */}
                      {e.icon}
                      {e.name}
                    </Link>
                    {/* <a href={e.href} className={styles.menuLink}>
                    </a> */}
                  </li>
                ))}
              </ul>
            </nav>
          </Fragment>
        ) : (
          <></>
          )
          )}
    </MenuContext.Consumer>
  );
};

export default Menu;
