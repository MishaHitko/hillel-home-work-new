import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

function App() {
  return (
      <>
        <Header />
          <div className="wrapper">
              <Menu />
              <Main />
          </div>
      </>
  );
}

export default App;
