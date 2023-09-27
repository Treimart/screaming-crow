import { useState } from "react"
import "./App.css"
import Maths from "./components/Maths"
import Toggle from "./components/Toggle"
import Show from "./components/Show"
import MyForm from "./components/MyForm"
import Fetching from "./components/Fetching"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(previousShow => !previousShow)

  return (
    <div className="Main">
      <h1>Märten</h1>
      <Fetching />
      <Show show={show} />
      <MyForm />
      <Toggle toggleShow={toggleShow} />
    </div>
  )
}

export default App
