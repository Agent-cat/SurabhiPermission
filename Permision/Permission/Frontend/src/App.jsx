import React, { useEffect } from 'react'
import UserSearch from './components/UserSearch'
import MobileOnly from './components/MobileOnly'

const App = () => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 123) return false; // F12
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) return false; // Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) return false; // Ctrl+Shift+J
      if (e.ctrlKey && e.keyCode === 85) return false; // Ctrl+U
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) return false; // Ctrl+Shift+C
      if (e.ctrlKey && e.shiftKey && e.keyCode === 75) return false; // Ctrl+Shift+K
    }

    function detectDevTools() {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      if (widthThreshold || heightThreshold) {
        alert('Please close developer tools to continue.');
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', detectDevTools);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', detectDevTools);
    };
  }, []);

  return (
    <MobileOnly>
      <div className="min-h-screen ">
        <div className=" mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center text-red-600 mb-8">
            Surabhi Permission
          </h1>
          <UserSearch />
        </div>
      </div>
    </MobileOnly>
  )
}

export default App