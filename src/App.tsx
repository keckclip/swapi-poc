import "./App.css";
import { Menu } from "./components/Menu";

import MainRouter from "./router/MainRouter";

function App() {
  return (
    <>
      <header>SWAPI React App</header>
      <nav>
        <Menu />
      </nav>
      <main>
        <MainRouter />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;


