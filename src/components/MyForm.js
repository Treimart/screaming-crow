import { Box, Button, TextField } from "@mui/material"
import React, { useState } from "react"

const MyForm = () => {
  const [name, setName] = useState("")
  const [school, setSchool] = useState("")

  const submitForm = event => {
    event.preventDefault()

    console.log({ name })
  }

  return (
    <form onSubmit={submitForm}>
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
          required
          id="outlined-required"
          label="Name"
          onChange={event => setName(event.target.value)}
        />
        <TextField
          id="outlined-required"
          label="School"
        />
        <Button
          type="submit"
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default MyForm
