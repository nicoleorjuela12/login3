import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <Router>
      <Routes>
          <Route path='/' exact element= {<login/>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
