import { Button } from "../../../shared-ui/src/components/Button";
import image3 from "./assets/app3.svg";

function App() {
  return (
    <div>
      <h1>Hello from App Three</h1>
      <Button />
      <img src={image3} alt="App Illustration" />
    </div>
  );
}

export default App;
