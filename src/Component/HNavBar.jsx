import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainBottom from './MainBottom';
function HNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleComponent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="MoblineNavbar" style={{ height: 80, width: 60,color:"white",padding:3 }}>
      <i class="fa-solid fa-bars" onClick={toggleComponent}></i>
      <div className='Momainb' style={{width:240,}}>{isOpen && <MainBottom />}</div>
    </div>
  );
}

export default HNavBar;
