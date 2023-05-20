import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Form.css";

const Form: React.FC = () => {
  const navigate: any = useNavigate();
  const [name, setname] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [email, setemail] = useState<string>("");

  interface userDetails {
    name: String;
    password: String;
    email: String;
  }

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleClick = (e: any) => {
    e.preventDefault();
    if (name && password && isValidEmail(email)) {
      const user: userDetails = {
        name: name,
        password: password,
        email: email,
      };
      localStorage.setItem(email, JSON.stringify(user));
      navigate("/SecondPage");
    } else {
      alert("Please enter all the required information correctly.");
    }
  };

  return (
    <div className="Form">
      <form action="">
        <TextField
          sx={{ margin: "10px 0px" }}
          label="Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
          variant="standard"
          value={name}
          required
        />
        <TextField
          sx={{ margin: "10px 0px" }}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
          label="Password"
          variant="standard"
          value={password}
          type="password"
          required
        />
        <TextField
          sx={{ margin: "10px 0px 30px 0px" }}
          label="Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
          value={email}
          variant="standard"
          type="email"
          required
        />
        <Button
          onClick={handleClick}
          className="Form_button"
          type="submit"
          variant="contained"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Form;
