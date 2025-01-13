import React, { useState } from 'react';
import PopData from './PopData.jsx';
import './Pop.css';

const Pop = () => {
  const [activePops, setActivePops] = useState([]);

  const handleClick = (popType) => {
    if (!activePops.includes(popType)) {
      setActivePops((prev) => [...prev, popType]);
      setTimeout(() => {
        setActivePops((prev) => prev.filter((type) => type !== popType));
      }, 5000);
    }
  };

  const renderPopContent = (popType) => {
    const popInfo = PopData.find((data) => data.name === popType);
    if (!popInfo) return null;

    return (
      <div className={`popItem ${popType}`} key={popType}>
        <img src={popInfo.img} alt={`${popType} icon`} className="popImg" />
        <div className="popText">
          <h4>{popInfo.name}</h4>
          <p>{popInfo.msg}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="popContainer">
      <div className="popBtnGroup">
        <button onClick={() => handleClick('success')} className="btn success">Success</button>
        <button onClick={() => handleClick('error')} className="btn error">Error</button>
        <button onClick={() => handleClick('warning')} className="btn warning">Warning</button>
      </div>
      <div className="popDisplay">
        {activePops.map((popType) => renderPopContent(popType))}
      </div>
    </div>
  );
};

export default Pop;