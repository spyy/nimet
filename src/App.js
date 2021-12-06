import React, { useState } from 'react';

import Search from './Search';


function App() {
  const [screenState, setScreenState] = useState('search');

  switch (screenState) {
    case 'result':
    case 'search':
    default:
      return <Search onSearch={() => setScreenState('result')} />
  }
}

export default App;
