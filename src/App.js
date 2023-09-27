import { useState } from "react"
import "./App.css"
import Toggle from "./components/Toggle"
import Show from "./components/Show"
import MyForm from "./components/MyForm"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="Main">
      <h1>Märten</h1>
      <MyForm />
      <Show show={show} />
      <Toggle toggleShow={toggleShow} />
    </div>
  )
}

export default App
