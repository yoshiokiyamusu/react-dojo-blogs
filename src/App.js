import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Create from './Create.js';
import BlogDetails from './BlogDetails';
import NotFound from './not_found';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//App is a component
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'yoshio', age: 30 };
  const link = 'http://www.google.com';

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{ title }</h1>
        <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route exact path="/create"> <Create /> </Route>
            <Route exact path="/blogs/:id"> <BlogDetails /> </Route>
            <Route path="/create"> <Create /> </Route>
            <Route path="*"> <NotFound /> </Route>
        </Switch>
        
        <p>Liked { likes } times</p>
        { <p>{ person.name }</p> }
        <p>{ Math.random() * 10 }</p>
        <a href={link}>Google Site</a>
        
      </div>
    </div>
    </Router>
  );
}

export default App;