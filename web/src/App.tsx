import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import GlobalStyle from './styles/global';

function App() {
  return (
    <div className='main-container'>
      <Sidebar />
      <Header />
      <GlobalStyle />
    </div>
  );
}

export default App;