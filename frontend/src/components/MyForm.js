import { Box, Button, TextField } from "@mui/material"
import React, { useState, useEffect } from "react"

const MyForm = () => {
  const [name, setName] = React.useState("")
  const [school, setSchool] = useState("")

  const [myForm, setMyForm] = useState(null)

  const saveFields = event => {
    setMyForm(previous => ({
      ...previous,
      [event.target.name]: event.target.value
    }))
  }

  const submitForm = event => {
    event.preventDefault()

    console.log(myForm)
  }

  // useEffect(() => {
  //   console.log("No dependancy array")
  // })

  const listenClicks = e => {
    console.log({ x: e.x, y: e.y })
  }

  useEffect(() => {
    console.log("Empty dependancy array")

    document.addEventListener("click", listenClicks)

    return () => document.removeEventListener("click", listenClicks)
  }, [])

  // useEffect(() => {
  //   console.log("myForm updated")
  // }, [myForm])

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
          name="name"
          id="outlined-required"
          label="Name"
          // onChange={event => setName(event.target.value)}
          onChange={saveFields}
        />
        <TextField
          name="school"
          id="outlined-required"
          label="School"
          onChange={saveFields}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ marginBottom: 2 }}
        >
          Submit
        </Button>
      </Box>
    </form>
  )
}

export default MyForm
