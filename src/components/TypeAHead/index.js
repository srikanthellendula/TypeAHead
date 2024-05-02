
import React, { useState } from 'react';
import './index.css'

const TypeAHead = () => {
  const items = [ "MS Dhoni", "Suresh Raina", "Virat Kohli", 'Rohit Sharma', 'Shreyas Iyer', 'KL Rahul', 'Hardik Pandya','Kuldeep Yadav', 'Bhuwaneshwar','Sachin Tendulkar', "Sourav Ganguly", 'Virender Shehwag', "Gautam Gambhit", 'Ravi Chandran Ashwin',"VVS Laxman", "Harbajan Singh", 'Yuvraj Singh', "Anil Kumble"] 
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false)
   

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(inputValue.toLowerCase())); 

  const handleInputChange = event => {
    setInputValue(event.target.value);
    setShowSuggestions(true)
     
  };

  const handleItemClick = suggestion => {

    setInputValue(suggestion);
    setShowSuggestions(false)
    
  };

  return (
    <div>
      <h3> This is Type A Head Component</h3>
      <div className='input-cont'> 
      <input
        id='id'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Pick favourite cricketer..."
      />
      {showSuggestions && <> {filteredItems.length !== 0 ? <ul>
          {filteredItems.map((item, index) => (
            <li key={index} onClick={() =>{handleItemClick(item)} }>
              {item}
            </li>
          ))}
        </ul>: <p> No results found </p>}</>}
        </div>
      
       
        
    
    </div>
  );
};

export default TypeAHead;
