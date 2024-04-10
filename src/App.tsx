import amzLogo from "./assets/amazon-logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Amazon React App</h1>
      <div>
        <img src={amzLogo} className="logo react" alt="Amazon logo" />
      </div>
    </>
  );
}

export default App;
