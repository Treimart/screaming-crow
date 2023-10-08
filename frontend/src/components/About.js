import React, { useState } from "react"
import "./App.css"

const About = props => {
  return (
    <div className="Main">
      <h1>Märten Treier</h1>
      <p>
        videomängud, dinosaurused, programmeerimine, 3D modeleerimine, video
        editing, animeerimine, näitlemiskunst, ettevõtlus, matemaatika,
        pedagoogika, optimiseerimine, level ja liidese disainimine
      </p>
      <form>
        <label for="name">Kasutajanimi: </label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
        ></input>
        <br />
        <label for="email">Meiliaadress: </label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
        ></input>
        <br />
        <label for="number">Üliõpilaskood: </label>
        <br />
        <input
          type="text"
          id="number"
          name="number"
        ></input>
        <br />
        <input
          type="submit"
          value="Saada"
        />
      </form>
    </div>
  )
}

export default About
