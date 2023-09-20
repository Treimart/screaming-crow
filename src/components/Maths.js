import React, { useState } from 'react'

const Maths = props => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <button>Press me</button>
    </>
  )
}

Maths.propTypes = {}

export default Maths