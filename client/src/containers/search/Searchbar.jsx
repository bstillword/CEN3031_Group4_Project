import React, {useEffect, useState} from 'react'
import './searchbar.css'


const Icon = () => {
  return (
    <div className='test'>
      <div className='child'>
    <svg height="50%" width="20px" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      
    </svg>
    </div>
    <div className='child'>
    <button className='button'>Submit</button>
    </div>
    </div>    
  );
};

const SearchBar = ({ stateChanger, placeHolder }) => {
  var count = 0;
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  // const [iter, setIter] = useState(0);
  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };
  const options = [
    {name: "Crypto"},
    {name: "Science"},
    {name: "Python"},
    {name: "Science"},
    {name: "Anime"},
    {name: "Dogs"},

  ]
  const getDisplay = () => {
    if (selectedValue){
      return selectedValue.name;
    }
    return placeHolder;
  };
  const updateCount = () => {
    count = count + 1;
    return count;
  }
  const onItemClick = (option) => {
    setSelectedValue(option);
  };


  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.name === option.name;
  };

  return (
    <div className="dropdown-container">
      <div onClick={handleInputClick} className="dropdown-input child test">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        {showMenu && (
        <div className="dropdown-menu">
            {options.map(option => (
              <div onClick ={() => onItemClick(option)} key={option.name} className={`dropdown-item ${isSelected(option) && "selected"}`}>
                {option.name}
                </div>
            ))}
            </div>
        )}

      </div>
      <div className='child button'>
        <button onClick={() => stateChanger(getDisplay(), updateCount())}>Refresh</button>
      </div>
    </div>
  );
};

export default SearchBar
