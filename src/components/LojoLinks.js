import React from 'react';
import { Space, Popover } from 'antd';
import './LojoLinks.css';

function LojoLinks() {
  return (
    <Space className="lojo-links">
      <div className="social-icons-container">
        <div className="container-label">Logins links</div>
        <div className="icons-row">
          <Popover content="Logins CV">
              <a href="https://lojones.github.io/resume.html">
                <img src={`ll-cv.png`} alt="CV" className="link-icon" />
              </a>
          </Popover>
          <Popover content="Chat with Login AI">
              <a href="https://chat.loginjones.com">
                  <img src={`ll-chat.png`} alt="Chat" className="link-icon" />
              </a>
          </Popover>
          <Popover content="Namesmith - An App to help you do themed naming">
              <a href="https://namesmith.loginjones.com">
                  <img src={`ll-namesmith.png`} alt="Namesmith" className="link-icon" />
              </a>
          </Popover>
          <Popover content="Logins Youtube playlists">
              <a href="https://www.youtube.com/@loginjones/playlists">
                  <img src={`ll-youtube.png`} alt="Youtube" className="link-icon" />
              </a>
          </Popover>
          <Popover content="Logins Tiktok playlists">
              <a href="https://www.tiktok.com/@realloginjones/collection/AI-7183808917036649222">
                  <img src={`ll-tiktok.png`} alt="Tiktok" className="link-icon" />
              </a>
          </Popover>
        </div>
      </div>
    </Space>
  );
}

export default LojoLinks;