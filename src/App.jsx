import "./App.css";
import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Skiplink from "./Skiplink";

function App() {
  const [page, setPage] = useState("#/");
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  function onNav(event) {
    event.preventDefault();
    const target = event.target.getAttribute("href");
    setPage(target);
  }


  return (
    <div className={`app ${theme}`}>
      <Skiplink />
      <Header onNav={onNav} setPage={setPage} setTheme={setTheme} toggleTheme={toggleTheme} />
      <Main page={page} onNav={onNav} setPage={setPage}/>
      <Footer onNav={onNav} setPage={setPage}/>

    </div>
  );
}

export default App;
