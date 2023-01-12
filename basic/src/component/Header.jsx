import React, { useState } from 'react';

export default function Header() {
  const [width, setWidth] = useState();
  const [bg, setBg] = useState('cadetblue');

  const handleBtnClick = (e) => {
    const typeBtn = document.querySelectorAll('button');

    typeBtn.forEach((btn) => {
      const btnW = `${btn.offsetWidth * typeBtn.length + 20}`;
      setWidth(btnW);
    });
    e.target.classList.add('on');
  };

  const App__type = (e) => {
    const target = e.target.className;
    switch (target) {
      case 'type01':
        setBg('blueviolet');
        break;
      case 'type02':
        setBg('violet');
        break;
      case 'type03':
        setBg('steelblue');
        break;
    }
  };
  return (
    <div>
      <header className="App__header" style={{ backgroundColor: bg }}>
        <span className="type__btn" onClick={handleBtnClick}>
          타입 변경하기
        </span>
        <div className="btn__area app__type" style={{ width: `${width}px` }}>
          <button className="type01" onClick={App__type}>
            type01
          </button>
          <button className="type02" onClick={App__type}>
            type02
          </button>
          <button className="type03" onClick={App__type}>
            type03
          </button>
        </div>
      </header>
      ;
    </div>
  );
}
