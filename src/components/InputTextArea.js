import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'antd';

function NsInputArea({ onSubmit, hasGenerated }) {
  const [textValue, setTextValue] = useState('');
  const submitButtonRef = useRef(null);
  const containerRef = useRef(null);
  const textareaRef = useRef(null);
  
  const buttonStyle = {
    backgroundColor: '#87CEFA',
    color: 'white',
    border: 'none',
  };

  const categories = [
    {"name": "Norse", "desc": "gods from Norse mythology"},
    {"name": "Roman", "desc": "deities from Roman legends"},
    {"name": "Greek", "desc": "characters from Greek mythology"},
    {"name": "Celtic", "desc": "deities and folklore entities from Celtic folklore"},
    {"name": "Egyptian", "desc": "gods from Egyptian mythology "},
    {"name": "Ancient Cities", "desc": "names of historic cities like Babylon, Troy, or Carthage in the category of Ancient Cities"},
    {"name": "Celestial", "desc": "constellations or stars like Orion, Vega, etc. from the category of Celestial"},
    {"name": "Nautical", "desc": "terms from nautical traditions in the category of Nautical"},
    {"name": "Mountains", "desc": "famous summits such as Everest, Olympus, or Denali in the category of Mountains"},
    {"name": "Space", "desc": "names from space missions, rovers, and astronauts, e.g., Apollo, Voyager, or Curiosity in the category of Space"},
    {"name": "Flora", "desc": "botanical names like plants and trees like Redwood, Yew, etc. in the category of Flora"},
    {"name": "Fantasy", "desc": "imaginary places from fantasy worlds like Narnia, Valinor, etc. in the category of Fantasy"},
    {"name": "Star Trek", "desc": "characters from Star Trek lore "}
  ];

  const scrollToButton = () => {
    if (submitButtonRef.current) {
      const buttonRect = submitButtonRef.current.getBoundingClientRect();
      const isVisible = (
        buttonRect.top >= 0 &&
        buttonRect.bottom <= window.innerHeight
      );

      if (!isVisible) {
        const extraSpace = 40;
        const targetPosition = 
          window.pageYOffset + 
          buttonRect.top - 
          window.innerHeight + 
          buttonRect.height + 
          extraSpace;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleTextChange = (newValue) => {
    setTextValue(newValue);
    onSubmit(null);
    scrollToButton();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitClick();
    }
  };

  const handleSubmitClick = () => {
    onSubmit(textValue);
    if (textareaRef.current) {
      const padding = 20;
      const targetPosition = 
        textareaRef.current.getBoundingClientRect().top + 
        window.pageYOffset - 
        padding;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="input-area-container" ref={containerRef}>
      <div className="mythology-buttons">
        {Array.isArray(categories) ? (
            categories.map((item, index) => (
                <Button 
                  key={index}
                  type="default" 
                  style={buttonStyle} 
                  onClick={() => handleTextChange(item.desc)}
                >
                    {item.name}
                </Button>
            ))
        ) : (
            <pre>Categories is not an array</pre>
        )}
      </div>
      <div className="textarea-container">
        <textarea 
          ref={textareaRef}
          className="main-textarea"
          value={textValue}
          placeholder="characters from Greek mythology"
          onChange={(e) => handleTextChange(e.target.value)}
          onFocus={scrollToButton}
          onKeyPress={handleKeyPress}
        />
        <div className="hint-text">...or customize the theme above</div>
      </div>
      <Button 
        ref={submitButtonRef}
        className="submit-button"
        onClick={handleSubmitClick}
      >
        {hasGenerated ? "Give me more!" : "Create!"}
      </Button>
    </div>
  );
}

export default NsInputArea; 