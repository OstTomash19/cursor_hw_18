import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Contacts from './components/Contacts';
import MakePost from './components/MakePost';
import Main from './components/Main';
import NavMenu from './components/NavMenu';
import Photo from './components/Photo';

function App() {
  return (
    <div>
      <Router>
        <NavMenu />
        <Switch>
          <Route path='/main' component={Main}/>
          <Route path='/posts' component={MakePost}/>
          <Route path='/photo' component={Photo}/>
          <Route path='/contacts' component={Contacts}/>
          <Route path='/' exact render={() => <Redirect to='/main'/>}/>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
