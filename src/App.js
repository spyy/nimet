import React, { useState } from 'react';

import Search from './Search';
import Firstnames from './Firstnames';


function App() {
  const defaultPrefs = {
    selection: 'miehet',
    lastname: '',
    location: '',
    useTablet: false
  }
  const item = localStorage.getItem('prefs');
  const prefs = item ? JSON.parse(item) : defaultPrefs;

  const [screenState, setScreenState] = useState('search');
  const [namesMinimum, setNamesMinimum] = useState('1000');
  
  const [selection, setSelection] = useState(prefs.selection);
  const [lastname, setLastname] = useState('');
  const [location, setLocation] = useState(prefs.location);
  const [useTablet, setUseTablet] = useState(prefs.useTablet);


  const savePrefs = () => {
    const item = {
      selection: selection,
      lastname: lastname,
      location: location,
      useTablet: useTablet
    }

    localStorage.setItem('prefs', JSON.stringify(item));
  }

  const onSearch = () => {
    savePrefs();

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
    case 'search':
    default:
      return (
        <Search
          onSearch={ onSearch }
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
