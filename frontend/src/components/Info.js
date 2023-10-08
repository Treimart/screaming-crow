import React from "react"

const Info = ({ name, school, group, scemester }) => {
  return (
    <div>
      <p>
        Veebileht on loodud {school} {group} eriala {scemester}. semestri
        raames.
      </p>
      <p>Lehe autor on {name}.</p>
    </div>
  )
}

export default Info
