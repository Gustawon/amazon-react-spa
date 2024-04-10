import amzLogo from "../assets/amazon-logo.svg";

function HomePage() {
  return (
    <>
      <h1>Amazon React App</h1>
      <div>
        <img src={amzLogo} className="logo" alt="Amazon logo" />
      </div>
    </>
  );
}

export default HomePage;
