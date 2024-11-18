import { useState } from 'react';
import './App.css';
import NsInputArea from './components/InputTextArea';
import OutputPanel from './components/OutputPanel';

function App() {
  const [outputData, setOutputData] = useState(null);

  const handleSubmit = async (inputText) => {
    try {
      // const response = await fetch('YOUR_BACKEND_URL', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ prompt: inputText }),
      // });
      
      // const data = await response.json();
      const data = [
        {"name": "Odin", "desc": "The all-father and chief of the gods"},
        {"name": "Thor", "desc": "God of thunder and protector of mankind"},
        {"name": "Loki", "desc": "Trickster god known for mischief and cunning"},
        {"name": "Freyja", "desc": "Goddess of love, fertility, and beauty"},
        {"name": "Tyr", "desc": "God of war and justice, known for bravery"},
        {"name": "Skadi", "desc": "Goddess of winter, mountains, and hunting"}
      ];
      setOutputData(data);
    } catch (error) {
      console.error('Error:', error);
      setOutputData({ error: 'Failed to fetch response' });
    }
  };

  return (
    <div className="App">
      <div className="content-wrapper">
        <NsInputArea onSubmit={handleSubmit} />
        <OutputPanel data={outputData} />
      </div>
    </div>
  );
}

export default App;
