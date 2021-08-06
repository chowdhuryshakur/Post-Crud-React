import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SinglePost from './pages/SinglePost';
// import components
import Navbar from "./components/Navbar";
import PostForm from './pages/AddPost';
function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/add-post">
        <PostForm />
      </Route>
      <Route path="/post/:id">
        <SinglePost/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
