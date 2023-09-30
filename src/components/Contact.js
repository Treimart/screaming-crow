import React, { useState } from "react"
import { TextField, Button, Box } from "@mui/material"

const Contact = () => {
  const [title, setEmail] = useState("")
  const [feedback, setfeedback] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    console.log("Email: ", title)
    console.log("Feedback: ", feedback)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2em"
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          value={title}
          onChange={event => setEmail(event.target.value)}
        />
        <TextField
          label="Feedback"
          variant="outlined"
          value={feedback}
          onChange={event => setfeedback(event.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default Contact
