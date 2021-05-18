import React, { useState, useEffect } from 'react';
import Character from './Pages/Character/Character';
import GlobalStyle from '../src/Styles/global';

function App() {

  return (
    <div>
      <GlobalStyle/>
      <Character/>
    </div>
  );
}

export default App;
