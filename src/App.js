import logo from "./logo.svg";
import "./App.css";
import { Typography, Button } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Typography variant="h1">hello</Typography>
      <Button variant="outlined">Click me</Button>
      <form>
        <h2>Lets sign you in.</h2>
        <br />
        <input placeholder="email" type="email" required />
        <br />
        <input placeholder="password" type="password" required />
        <br />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default App;
