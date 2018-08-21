import React from 'react';

import '../styles/index.css';
import '../styles/flexbox-grid.css';


const App = ({ children }) => {
  return (
    <div
      className="wrapper">
      {children}
    </div>
  );
}

export default App;
