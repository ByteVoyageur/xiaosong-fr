'use client'

import React from 'react';

const CursorOne = () => {

  const handleMouseEnter = () => {
    const cursorCircle = document.getElementById('awesome-cursor-circle');
    if (cursorCircle) {
      cursorCircle.classList.add('hide');
    }
  };

  const handleMouseLeave = () => {
    const cursorCircle = document.getElementById('awesome-cursor-circle');
    if (cursorCircle) {
      cursorCircle.classList.remove('hide');
    }
  }; 



  return (
    <> 

      <div id="awesome-cursor">
        <div id="awesome-cursor-circle">
          <div id="awesome-cursor-loader"></div>
          <div id="awesome-cursor-play" className="">
            <span className="awesome-cursor-play-start">Play</span>
            <span className="awesome-cursor-play-stop">Stop</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CursorOne;
