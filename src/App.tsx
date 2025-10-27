import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  console.log(location);

  // URL의 마지막 주소를 가져오는 방법들
  const code = location.pathname.split("/").pop();

  useEffect(() => {
    if (code) {
      const customSchemeUrl = `mellog://invite/${code}`;
      window.location.href = customSchemeUrl;
    }
  }, [code]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
