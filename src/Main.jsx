import React from "react";


import About from "./page/About";
import Menu from "./page/Menu";
import Order from "./page/Order";
import Home from "./page/Home";
import Photo from "./page/Photo";


function Main({ page, onNav }) {
  return (
    <main id="main-content" className="content">
      {(page === "#/" || page === "/" || page === "") && (
        <Home onNav={onNav}/>
      )}
      {page === "#/home" && <Home />}
      {page === "#/about" && <About />}
      {page === "#/menu" && <Menu />}
      {page === "#/order" && <Order />}
      {page === "#/photo" && <Photo />}
      
    </main>
  );
}

export default Main;