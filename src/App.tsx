import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextInput from "./component/TextInput"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>Hello
      <TextInput variant = 'email'/>
    </div> 
  );
}

export default App;
