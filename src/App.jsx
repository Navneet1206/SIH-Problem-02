import React, { useState, useRef } from 'react';
import './App.css'; // Assuming your styles are in App.css

const App = () => {
  // State to manage the sidebar and button states
  const [isSidebarClosed, setSidebarClosed] = useState(false);
  const [rotatedButtons, setRotatedButtons] = useState([]);

  // Ref for the sidebar
  const sidebarRef = useRef(null);

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
    closeAllSubMenus();
  };

  // Toggle individual submenu
  const toggleSubMenu = (index) => {
    if (!rotatedButtons.includes(index)) {
      closeAllSubMenus();
    }

    setRotatedButtons((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

    // If the sidebar is closed, open it
    if (isSidebarClosed) {
      setSidebarClosed(false);
    }
  };

  // Close all submenus
  const closeAllSubMenus = () => {
    setRotatedButtons([]);
  };

  return (
    <nav id="sidebar" className={isSidebarClosed ? 'close' : ''} ref={sidebarRef}>
      <ul>
        <li>
          <span className="logo">Alumini Association</span>
          <button onClick={toggleSidebar} id="toggle-btn" className={isSidebarClosed ? 'rotate' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z" />
            </svg>
          </button>
        </li>

        <li className="active">
          <a href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z" />
            </svg>
            <span>Home</span>
          </a>
        </li>

        <li>
          <a href="donate.html">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
              <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z" />
            </svg>
            <span>Donation Portal</span>
          </a>
        </li>

        <li>
          <button onClick={() => toggleSubMenu(0)} className={`dropdown-btn ${rotatedButtons.includes(0) ? 'rotate' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" />
            </svg>
            <span>Jobs</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />
            </svg>
          </button>
          <ul className={`sub-menu ${rotatedButtons.includes(0) ? 'show' : ''}`}>
            <div>
              <li><a href="jobb.html">Post Job</a></li>
              <li><a href="search_job.html">Search Job</a></li>
            </div>
          </ul>
        </li>

        <li>
          <button onClick={() => toggleSubMenu(1)} className={`dropdown-btn ${rotatedButtons.includes(1) ? 'rotate' : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />
            </svg>
            <span>Alumni Directory</span>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
              <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z" />
            </svg>
          </button>
          <ul className={`sub-menu ${rotatedButtons.includes(1) ? 'show' : ''}`}>
            <div>
              <li><a href="events.html">Events</a></li>
              <li><a href="alumni.html">Alumni Directory</a></li>
            </div>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default App;
