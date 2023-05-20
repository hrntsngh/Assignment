import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogBox from "./DialogBox";
import "./Form.css";

const Form: React.FC = () => {
  const navigate: any = useNavigate();
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

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
      setOpen(true);
    }
  };

  return (
    <div className="Form">
      {open == false ? (
        <form action="">
          <TextField
            sx={{ margin: "10px 0px" }}
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            variant="standard"
            value={name}
            required
          />
          <TextField
            sx={{ margin: "10px 0px" }}
            onChange={(e) => {
              setPassword(e.target.value);
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
              setEmail(e.target.value);
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
      ) : (
        <DialogBox open={open} setOpen={setOpen} />
      )}
    </div>
  );
};

export default Form;
