import { Fragment, useState } from "react";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { MenuContext } from "../Menu/Menu";

export const Layout = (props) => {

  const { children } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((oldMenuOpen) => !oldMenuOpen);
  }

  return (
    <MenuContext.Provider value={menuOpen}>
      <Fragment>
        <Header onToggleMenu={toggleMenu}/>
        <Main>
          { children }
        </Main>
        <Footer/>
      </Fragment>
    </MenuContext.Provider>
  );
};

export default Layout;