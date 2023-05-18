import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const onButtonClick = () => {
    navigate("/details");
  };

  return (
    <div className="App">
      <Button className="landingButton" onClick={onButtonClick} type="primary">
        Students
      </Button>
    </div>
  );
}

export default App;
