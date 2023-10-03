import React, { useState, useEffect } from "react"

const FetchComment = () => {
  const [data, setData] = useState([
    { post: {}, comment: {} },
    { post: {}, comment: {} }
  ])

  useEffect(() => {
    const fetchData = async () => {
      const commentsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      )
      const comments = await commentsResponse.json()

      for (let i = 0; i < 2; i++) {
        const postId = Math.floor(Math.random() * 100) + 1
        const postResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        )
        const post = await postResponse.json()

        const relatedComments = comments.filter(
          comment => comment.postId === post.id
        )
        const randomComment =
          relatedComments[Math.floor(Math.random() * relatedComments.length)]

        data[i] = { post, comment: randomComment }
      }

      setData([...data])
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Posts:</h2>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.post.title}</h3>
          <b>Comments:</b>
          {item.comment && <p>{item.comment.body}</p>}
        </div>
      ))}
    </div>
  )
}

export default FetchComment
