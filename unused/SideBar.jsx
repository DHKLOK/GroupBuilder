import { useState } from "react";
import React from "react";
import { useColor } from "../guildgroupbuilder/src/ColorContext";
import circleIcon from './assets/Circle1.png'

function SideBar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
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
            transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
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
      </div>

      {/* <div className="content-container">
        <div>
          {!isCollapsed && commonBackgroundColor && <Card backgroundColor={commonBackgroundColor} />}
        </div>
        <br />
        <div>
          {!isCollapsed && commonBackgroundColor && <Links backgroundColor={commonBackgroundColor} />}
          <br />
          {!isCollapsed && commonBackgroundColor && <Links2 backgroundColor={commonBackgroundColor} />}
          <br />
          {!isCollapsed && commonBackgroundColor && <Links3 backgroundColor={commonBackgroundColor} />}
          <br />
          {!isCollapsed && commonBackgroundColor && <Links4 backgroundColor={commonBackgroundColor} />}
          <br />
          {!isCollapsed && commonBackgroundColor && <Links5 backgroundColor={commonBackgroundColor} />}
        </div>
      </div> */}
    </div>
  );
}

export default SideBar;
