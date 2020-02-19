//looking for a package and it knows its in the folder that this file is in
import React from 'react';
//looking for a file
import './App.css';
//importing the other react elements
import ArticleListing from './pages/articleListing';
import Article from './pages/article';
//importing the router 
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/article/:id">
            <Article/>
          </Route>
          <Route path="/">
            <ArticleListing/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
