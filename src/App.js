import { useState } from 'react';
import './App.css';
import NsInputArea from './components/InputTextArea';
import OutputPanel from './components/OutputPanel';

function App() {
  const [outputData, setOutputData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (inputText) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/topicitems', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ topic: inputText }),
      });
      
      const data = await response.json();
      setOutputData(data);
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
        <NsInputArea onSubmit={handleSubmit} />
        <OutputPanel data={outputData} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
