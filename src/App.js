import "./App.css";
import "@fontsource/roboto";
import { Content } from "./components/content/Content";
import { Header } from "./components/Header";
export const App = () => {
  return (
    <>
      <div className="App">
        <div className="headerComponent">
            <Header></Header>
        </div>
        <div className="contentComponent">
            <Content></Content>
        </div>
      </div>
    </>
  );
};
