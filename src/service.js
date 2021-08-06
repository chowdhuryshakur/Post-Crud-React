import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        setPosts(response);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  })
  return (
    <AppContext.Provider
      value={{ loading, posts}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}
//export const AuthContext = createContext();
export { AppContext, AppProvider }