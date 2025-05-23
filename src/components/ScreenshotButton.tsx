'use client'

import React from 'react'

const ScreenshotButton: React.FC = () => {
  const takeScreenshot = async () => {
    console.log('📸 Taking screenshot of the 3D portfolio...');
    
    // Wait for the 3D scene to render properly
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Find the canvas element
    const canvas = document.querySelector('canvas');
    if (!canvas) {
      console.error('No canvas element found!');
      return;
    }
    
    try {
      // Convert the canvas to a data URL
      const dataUrl = canvas.toDataURL('image/png');
      
      // Create a download link
      const link = document.createElement('a');
      link.download = 'portfolio-screenshot.png';
      link.href = dataUrl;
      link.click();
      
      console.log('✅ Screenshot saved! Use this for your README.md');
    } catch (error) {
      console.error('Error taking screenshot:', error);
    }
  };

  return (
    <button
      onClick={takeScreenshot}
      className="fixed bottom-4 right-4 bg-purple-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center z-50 opacity-50 hover:opacity-100 transition-opacity"
      title="Take Screenshot"
      aria-label="Take a screenshot of the portfolio"
    >
      📸
    </button>
  );
};

export default ScreenshotButton;
