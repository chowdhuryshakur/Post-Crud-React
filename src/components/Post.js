
import React from 'react'
import { Link } from 'react-router-dom'
export default function Post({ id, title, body }) {
  return (
    <article className='post'>
      <div className='img-container'>
        <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="thumb" />
      </div>
      <div className='post-footer'>
        <h3>{title}</h3>
        <p>{body}</p>
        <Link to={`/post/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  )
}