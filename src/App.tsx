import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import { Helmet } from "react-helmet";

function App() {
  const [count, setCount] = useState(0);

  const TITLE = "My Page Title";

  /*useEffect(() => {
    document.title = "App title";
  }, []);*/

  return (
    <main style={{ padding: "1rem 0" }}>
      <Home />
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
    </main>
  );
}

export default App;
