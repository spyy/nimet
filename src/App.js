import React, { useState } from 'react';

import Search from './Search';
import Result from './Result';


function App() {
  const [screenState, setScreenState] = useState('search');
  const [selection, setSelection] = useState('nimi');
  const [alphabet, setAlphabet] = useState('A');

  switch (screenState) {
    case 'result':
      return <Result onClose={() => setScreenState('search')} selection={selection} alphabet={alphabet} />
    case 'search':
    default:
      return <Search onSearch={() => setScreenState('result')} selection={selection} alphabet={alphabet} onChecked={val => setAlphabet(val)} onChange={val => setSelection(val)} />
  }
}

export default App;
