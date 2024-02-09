import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file with styles for the cursor

function App() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  const handleClick = () => {
    setCursorVisible(false);
  };

  const handleMouseEnter = () => {
    setCursorVisible(true);
  };

  const handleMouseLeave = () => {
    if (!cursorVisible) {
      setCursorVisible(true);
    }
  };

  return (
    <div className="App" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {/* Your app content */}
      {cursorVisible && <div className="custom-cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>}
    </div>
  );
}

export default App;


