import { useState } from 'react'
import { ColorProvider } from './ColorContext';
//import SideBar from '../../unused/SideBar';
import Rightbutton from './Rightbutton';
function App() {
  return (
    <ColorProvider>
    <Rightbutton></Rightbutton>
        </ColorProvider>
  );
}

export default App
