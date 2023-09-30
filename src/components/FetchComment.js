import React, { useEffect } from "react"
import { useState } from "react"

const FetchComment = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const num1 = Math.floor(Math.random() * 100) + 1
    const num2 = Math.floor(Math.random() * 100) + 1

    const urls = [
      `https://jsonplaceholder.typicode.com/posts/${num1}`,
      `https://jsonplaceholder.typicode.com/posts/${num2}`
    ]

    const allData = await Promise.all(
      urls.map(async url => {
        const response = await fetch(url)
        return response.json()
      })
    )

    setData(allData)
    console.log(allData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>Featured posts</h2>
      {data && (
        <div>
          <ul>
            {data.map(item => (
              <li key={item.id}>
                {item.id} {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FetchComment
