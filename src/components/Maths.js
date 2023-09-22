import React, { useState } from "react"

const Maths = props => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>{count}</div>
      <div className="AddButtons">
        <button onClick={() => setCount(count + 1)}>+1</button>
        <button onClick={() => setCount(count + 10)}>+10</button>
        <button onClick={() => setCount(count + 100)}>+100</button>
      </div>
      <div className="RemoveButtons">
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(count - 10)}>-10</button>
        <button onClick={() => setCount(count - 100)}>-100</button>
      </div>
    </>
  )
}

Maths.propTypes = {}

export default Maths
