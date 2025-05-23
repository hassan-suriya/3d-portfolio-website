// This is a helper script to take screenshots of your 3D portfolio
// Run it in the browser console when your site is running

async function takeScreenshot() {
  console.log('📸 Taking screenshot of the 3D portfolio...');
  
  // Wait for the 3D scene to fully render
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Try to get the canvas element
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
}

// Execute the function
takeScreenshot();
