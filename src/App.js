// imports
import data from './data';
import Options from './components/Options';
import React from 'react';

export default function App() {
  // mapping over the data items
  const opt = data.map((item) => {
    return <Options key={item.id} item={item} />;
  });

  // destructuring of state
  const [showOpts, setShowOpts] = React.useState(true);

  // displays Options
  function showOptions() {
    setShowOpts(!showOpts);
  }

  // hides display Options
  function hideOptions() {
    setShowOpts(true);
  }

  return (
    <div className="App">
      <h1>Coding Ninjas - React Project - Dropdown</h1>
      <h3>Should you use a dropdown?</h3>
      <div className="container">
        <div className="select" onMouseEnter={showOptions}>
          <p>Select</p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2985/2985151.png"
            className="drop-icon"
          />
        </div>
        {/* options */}
        <div
          className={`${showOpts ? 'display-Options' : 'options'}`}
          onClick={hideOptions}
        >
          {opt}
        </div>
      </div>
    </div>
  );
}
