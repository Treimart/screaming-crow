import React from "react"
import "./App.css"
import Button from "@mui/material/Button"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Contact from "./components/Contact"
import FetchComment from "./components/FetchComment"

function App() {
  const hobbies = [
    "video games",
    "ancient life",
    "coding",
    "3D modeling",
    "video editing",
    "animating",
    "acting",
    "marketing",
    "mathematics",
    "pedagogy",
    "optimization",
    "level and UI desingn"
  ]

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Märten Treier
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <div className="Main">
        <h2>My hobbies and interests</h2>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <h2>Contact us!</h2>
        <Contact />
        <FetchComment />
      </div>
    </div>
  )
}

export default App
