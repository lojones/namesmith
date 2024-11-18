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
    {"name": "Norse", "desc": "7 figures from Norse mythology"},
    {"name": "Roman", "desc": "8 deities from Roman legends"},
    {"name": "Greek", "desc": "9 characters from Greek mythology"},
    {"name": "Celtic", "desc": "10 figures, spirits, and folklore entities from Celtic folklore"},
    {"name": "Egyptian", "desc": "6 gods from Egyptian mythology "},
    {"name": "Ancient Cities", "desc": "12 names of historic cities like Babylon, Troy, or Carthage in the category of Ancient Cities"},
    {"name": "Celestial", "desc": "7 objects from the constellations or stars like Orion, Vega, etc. in the category of Celestial"},
    {"name": "Nautical", "desc": "11 terms from nautical traditions in the category of Nautical"},
    {"name": "Mountains", "desc": "6 famous summits such as Everest, Olympus, or Denali in the category of Mountains"},
    {"name": "Space", "desc": "8 names from space missions, rovers, and astronauts, e.g., Apollo, Voyager, or Curiosity in the category of Space"},
    {"name": "Flora", "desc": "9 botanical names like Redwood, Yew, etc. in the category of Flora"},
    {"name": "Fantasy", "desc": "10 imaginary places from fantasy worlds like Narnia, Valinor, etc. in the category of Fantasy"},
    {"name": "Star Trek", "desc": "12 elements from Star Trek lore "}
]




  const handleSubmit = () => {
    onSubmit(textValue);
  };

  return (
    <div className="input-area-container">
      <div className="mythology-buttons">
        {Array.isArray(categories) ? (
            categories.map((item, index) => (
                <Button type="default" style={buttonStyle} onClick={() => {setTextValue(item.desc); handleSubmit()}}>
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
        placeholder="group of 6 things named after norse myth figures"
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