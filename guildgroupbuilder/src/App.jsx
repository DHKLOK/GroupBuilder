import { useState } from 'react'
import { ColorProvider } from './ColorContext';
import SideBar from './SideBar';

function App() {
  return (
    <ColorProvider>
      <SideBar />
    </ColorProvider>
  );
}

export default App
