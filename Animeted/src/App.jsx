
import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const loadScript = async () => {
      try {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
          script.onload = resolve;
          script.onerror = reject;
          document.body.appendChild(script);
        });
        // Script loaded successfully, you can now use VismeForms
      } catch (error) {
        console.error('Failed to load script:', error);
      }
    };

    loadScript();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="visme_d" data-title="Untitled Project" data-url="8r6w9zkp-untitled-project?fullPage=true" data-domain="forms" data-full-page="true" data-min-height="100vh" data-form-id="27462"></div>
  );
};

export default App;

