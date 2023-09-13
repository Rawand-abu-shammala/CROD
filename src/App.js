import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './router/Router';

function App() {
  return (
    <Router>
      <div className="App">
        <RouterComponent />
      </div>
    </Router>
  );
}

export default App;
