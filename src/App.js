import "./App.css";
import "@fontsource/roboto";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars } from '@fortawesome/free-solid-svg-icons'
import { Main } from "./components/Main";
import { Header } from "./components/Header";
export const App = () => {
  return (
    <>
      <div className="App">
        <div className="header">
            <Header></Header>
        </div>
        <div className="mainComponent">
            <Main></Main>
        </div>
      </div>
    </>
  );
};
