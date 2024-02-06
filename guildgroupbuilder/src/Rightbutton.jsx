import { useState } from "react";
import React from "react";
import { useColor } from "../src/ColorContext.jsx";
import circleIcon from './assets/Circle1.png'
import Door1 from './assets/Door1.png'

function Rightbutton() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { commonBackgroundColor } = useColor();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };


  return (
    <div className={`secondLayer ${isCollapsed ? 'collapsed' : ''}`}>
      <div>
        <button
          onClick={toggleSidebar}
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
            margin: 0,
            transition: 'transform 0.3s ease',
            transform: `rotate(${isCollapsed ? '0deg' : '180deg'})`,
          }}
        >
          <img
            src={circleIcon}
            alt={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            style={{
              height: '50px',
              paddingTop: '5px',
              paddingLeft: '8px',
            }}
          />
        </button>

        <div
          style={{
            height: '500px',
            width: '500px',
            transition: 'transform 0.5s ease',
            transform: `translateY(${isCollapsed ? '-100%' : '0'})`,
          }}
        >
          <img
            src={Door1}
            alt={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}

  export default Rightbutton;