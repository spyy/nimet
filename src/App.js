import React, { useState } from 'react';

import Search from './Search';
import Firstnames from './Firstnames';
import Lastnames from './Lastnames';


function App() {
  const [screenState, setScreenState] = useState('search');
  const [selection, setSelection] = useState('miehet');
  const [namesMinimum, setNamesMinimum] = useState('1000');
  const [alphabet, setAlphabet] = useState('A');
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState('');
  const [useTablet, setUseTablet] = useState(false);

  const onLastnameSelected = name => {
    setLastname(name);

    setScreenState('firstnames');
  }

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
    case 'lastnames':
      return (
        <Lastnames
          onClose={() => setScreenState('search')}
          onLastnameSelected={name => onLastnameSelected(name)}
          namesMinimum={namesMinimum}
          selection={selection}
          alphabet={alphabet} />
      );
    case 'search':
    default:
      return (
        <Search
          onSearch={() => setScreenState('lastnames')}
          namesMinimum={namesMinimum}
          selection={selection}
          alphabet={alphabet}
          useTablet={useTablet}
          onUseTablet={() => setUseTablet(!useTablet)}
          onNamesMinimum={val => setNamesMinimum(val)}
          onLocation={val => setLocation(val)}
          onChecked={val => setAlphabet(val)}
          onChange={val => setSelection(val)} />
      );
  }
}

export default App;
