import React from 'react';
import {Router, Route , Switch} from 'react-router-dom'
import history from "./history";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./layout/Header";


function App() {
  return (
    <div>
      <Router history={history}>
        <Header/>
        <div className="ui container">
          <Switch>
            <Route path='/streams/new' exact component={StreamCreate}/>
            <Route path='/streams/edit/:id' exact component={StreamEdit}/>
            <Route path='/streams/delete/:id' exact component={StreamDelete}/>
            <Route path='/streams/:id' exact component={StreamShow}/>
            <Route path='/' exact component={StreamList}/>
            <Route render={() => <h1>Not found</h1>}/>
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
