import React, { useState } from 'react';
import { Button } from 'antd';

function NsInputArea({ onSubmit }) {
  const [textValue, setTextValue] = useState('');
  
  const buttonStyle = {
    backgroundColor: '#87CEFA',
    color: 'white',
    border: 'none',
  };

  const categories = [
    {"name": "Norse", "desc": "figures from Norse mythology"},
    {"name": "Roman", "desc": "deities from Roman legends"},
    {"name": "Greek", "desc": "characters from Greek mythology"},
    {"name": "Celtic", "desc": "figures, spirits, and folklore entities from Celtic folklore"},
    {"name": "Egyptian", "desc": "gods from Egyptian mythology "},
    {"name": "Ancient Cities", "desc": "names of historic cities like Babylon, Troy, or Carthage in the category of Ancient Cities"},
    {"name": "Celestial", "desc": "objects from the constellations or stars like Orion, Vega, etc. in the category of Celestial"},
    {"name": "Nautical", "desc": "terms from nautical traditions in the category of Nautical"},
    {"name": "Mountains", "desc": "famous summits such as Everest, Olympus, or Denali in the category of Mountains"},
    {"name": "Space", "desc": "names from space missions, rovers, and astronauts, e.g., Apollo, Voyager, or Curiosity in the category of Space"},
    {"name": "Flora", "desc": "botanical names like Redwood, Yew, etc. in the category of Flora"},
    {"name": "Fantasy", "desc": "imaginary places from fantasy worlds like Narnia, Valinor, etc. in the category of Fantasy"},
    {"name": "Star Trek", "desc": "elements from Star Trek lore "}
]

  const handleSubmit = () => {
    onSubmit(textValue);
  };

  return (
    <div className="input-area-container">
      <div className="mythology-buttons">
        {Array.isArray(categories) ? (
            categories.map((item, index) => (
                <Button type="default" style={buttonStyle} onClick={() => {setTextValue(item.desc); }}>
                    {item.name}
                </Button>
                ))
            ) : (
                <pre>Catories is not an array</pre>
            )}
      </div>
      <textarea 
        className="main-textarea"
        value={textValue}
        placeholder="characters from Greek mythology"
        onChange={(e) => setTextValue(e.target.value)}
      />
      <Button 
        className="submit-button"
        onClick={handleSubmit}
      >
        Let's Go
      </Button>
    </div>
  );
}

export default NsInputArea; 