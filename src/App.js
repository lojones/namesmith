import { useState } from 'react';
import './App.css';
import NsInputArea from './components/InputTextArea';
import OutputPanel from './components/OutputPanel';

function App() {
  const [outputData, setOutputData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleSubmit = async (inputText) => {
    if (inputText === null) {
      // Reset state when text changes
      setOutputData(null);
      setHasGenerated(false);
      return;
    }

    setIsLoading(true);
    try {
      // Create the request body based on whether we have existing items
      const requestBody = {
        topic: inputText,
        ...(hasGenerated && outputData?.items ? {
          butnot: outputData.items.map(item => item.name).join(',')
        } : {})
      };

      const response = await fetch('http://localhost:5000/api/topicitems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(requestBody),
      });
      
      const data = await response.json();
      setOutputData(data);
      setHasGenerated(true);
    } catch (error) {
      console.error('Error:', error);
      setOutputData({ error: 'Failed to fetch response' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="content-wrapper">
        <NsInputArea onSubmit={handleSubmit} hasGenerated={hasGenerated} />
        <OutputPanel data={outputData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
