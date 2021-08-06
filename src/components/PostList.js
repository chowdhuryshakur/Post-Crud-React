import React from 'react'
import Post from './Post'
import { useGlobalContext } from '../service'
import Loader from 'react-loader-spinner'

export default function PostList() {
  const { posts, loading } = useGlobalContext()
  if (loading) {
    return <Loader className='loader'
      type="Puff"
      color="#FFD767"
      height={150}
      width={150}
    />
  }
  if (posts.length < 1) {
    return (
      <h2 className='section-title'>
        There is No post to show!!!
        <p>check your connection.</p>
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>All Posts</h2>
      <div className='posts-center'>
        {posts.map((item) => {
          return <Post key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}