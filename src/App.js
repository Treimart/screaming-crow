import logo from "./logo.svg"
import "./App.css"
import Hello from "./components/Hello"
import Maths from "./components/Maths"
import About from "./components/About"
import Info from "./components/Info"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Hello name="Märten" /> */}
        <About />
        <Info
          name="Märten"
          school="TLÜ"
          group="Informaatika"
          scemester={2}
        />
        <Maths />
        <Maths />
        <Maths />
      </header>
    </div>
  )
}

export default App
