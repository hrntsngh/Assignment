import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./styles.css";

const SecondPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.length === 0) {
      navigate("/");
    }
  }, []);

  return (
    <div className="SecondPage">
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
};

export default SecondPage;
