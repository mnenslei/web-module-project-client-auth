import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/login'>
          <Redirect to='/'/>
        </Route>

        <Route exact path='/friends'>
          <FriendList/>
        </Route>

        <Route exact path='/friends/add'>
          <AddFriend/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
