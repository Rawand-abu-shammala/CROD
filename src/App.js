// import './App.css';

// function App() {
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;



// App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import RouterComponent from './router/Router';
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
