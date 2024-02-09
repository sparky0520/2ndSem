import Window from "./Window"
import Keypad from "./Keypad"
import "./css/app.css"

function App() {
  return (
    <div className="container">
      <Window content='1'/>
      <Keypad />
    </div>
  )
}

export default App
