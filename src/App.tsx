import "./App.css";

import MainRouter  from "./router/MainRouter";

function App() {
  return (
    <>
      <header>SWAPI React App</header>
      <nav>
        Menu
        <ul>
          <li>
            <a href="/films">Films</a>
          </li>
          <li>
            <a href="/people">People</a>
          </li>
          <li>
            <a href="/planets">Planets</a>
          </li>
          <li>
            <a href="/species">Species</a>
          </li>
          <li>
            <a href="/starships">Starships</a>
          </li>
          <li>
            <a href="/vehicles">Vehicles</a>
          </li>
        </ul>
      </nav>
      <main>
        <MainRouter />
      </main>
      <footer>footer</footer>
    </>
  );
}

export default App;
