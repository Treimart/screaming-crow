import React, { useEffect } from "react"
import { useState } from "react"

const FetchComment = () => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const postNum1 = Math.floor(Math.random() * 100) + 1
    const postNum2 = Math.floor(Math.random() * 100) + 1

    const urls = [
      `https://jsonplaceholder.typicode.com/todos/${postNum1}`,
      `https://jsonplaceholder.typicode.com/todos/${postNum2}`
    ]

    const allData = await Promise.all(
      urls.map(async url => {
        const response = await fetch(url)
        const post = await response.json()

        const commentNum1 = Math.floor(Math.random() * 5) + 1
        const commentNum2 = Math.floor(Math.random() * 5) + 1

        const commentUrls = [
          `https://jsonplaceholder.typicode.com/comments?postId=${post.id}&id=${
            (post.id - 1) * 5 + commentNum1
          }`,
          `https://jsonplaceholder.typicode.com/comments?postId=${post.id}&id=${
            (post.id - 1) * 5 + commentNum2
          }`
        ]

        const comments = await Promise.all(
          commentUrls.map(async url => {
            const response = await fetch(url)
            return response.json()
          })
        )

        return { ...post, comments }
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
          {data.map(post => (
            <div key={post.id}>
              <h3>
                {post.id} {post.title}
              </h3>
              <b>Comments:</b>
              {post.comments.map(comment => (
                <p key={comment.id}>{comment.name}</p>
              ))}
              <br />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FetchComment
