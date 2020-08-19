import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './home';
import myforks from './myforks';
import favorites from './favorites';
import settings from './settings';
import watched from './watched';
import Movie from './movie';
import Search from './search';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="main__content">
          <Sidebar />
          <Route path="/" exact component={Home} />
          <Route path="/myforks" exact component={myforks} />
          <Route path="/movies/:name" exact component={Movie} />
          <Route path="/favorites" exact component={favorites} />
          <Route path="/settings" exact component={settings} />
          <Route path="/watched" exact component={watched} />
          <Route path="/search/:name" exact component={Search} />
        </div>
      </div>
    </Router>
  );
}

export default App;
