import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./layout/Header";

const pageOne = () => {
  return <div>Page one</div>
};
const pageTwo = () => {
  return <div>Page two</div>
};

function App() {
  return (
    <div>

      <Router>
        <Header/>
        <div className="ui container">
          <Route path='/streams/new' exact component={StreamCreate}/>
          <Route path='/streams/edit' exact component={StreamEdit}/>
          <Route path='/streams/delete' exact component={StreamDelete}/>
          <Route path='/streams/show' exact component={StreamShow}/>
          <Route path='/' exact component={StreamList}/>
        </div>
      </Router>

    </div>
  );
}

export default App;
