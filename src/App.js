import React, { useState } from 'react';

import Search from './Search';
import Firstnames from './Firstnames';


function App() {
  const [screenState, setScreenState] = useState('search');
  const [selection, setSelection] = useState('miehet');
  const [namesMinimum, setNamesMinimum] = useState('500');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [useTablet, setUseTablet] = useState(false);



  switch (screenState) {
    case 'firstnames':
      return (
        <Firstnames
          onClose={() => setScreenState('search')}
          useTablet={useTablet}
          namesMinimum={namesMinimum}
          selection={selection}
          location={location}
          lastname={lastname} />
      );
    case 'search':
    default:
      return (
        <Search
          onSearch={() => setScreenState('firstnames')}
          selection={selection}
          location={location}
          lastname={lastname}
          useTablet={useTablet}
          onUseTablet={() => setUseTablet(!useTablet)}
          onLocation={val => setLocation(val)}
          onLastname={val => setLastname(val)}
          onChange={val => setSelection(val)} />
      );
  }
}

export default App;
