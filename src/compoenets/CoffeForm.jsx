import { coffeeOptions } from '../utils';
import { useState } from 'react';
export default function CoffeForm() {
  const [selectedCoffe, setSelectedCoffe] = useState(null);
  const [showCoffeTypes, setshowCoffeTypes] = useState(false);
  const [coffeeCost,setCoffeeCost] = useState(0)
  const[hour,setHour] = useState(0)
  const[min,setMin]=useState(0)

  function handleSubmitForm(){
      console.log(selectedCoffe,coffeeCost,hour,min )
  }

  return (
    <>
      <div className='section-header'>
        <i className='fa-sharp fa-regular fa-pencil'></i>
        <h2>Start Tracking Today</h2>
      </div>
      <h4>Select coffee type</h4>
      <div className='coffee-grid'>
        {coffeeOptions.slice(0, 5).map((option, optionIdnex) => {
          return (
            <button
              onClick={() => {
                setSelectedCoffe(option.name);
                setshowCoffeTypes(false);
              }}
              className={
                'button-card' +
                (option.name === selectedCoffe ? 'coffee-button-selected' : ' ')
              }
              key={optionIdnex}
            >
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
          );
        })}
        <button
          onClick={() => {
            setshowCoffeTypes(true);
            setSelectedCoffe(null)
          }}
          className={
            'button-card ' + (showCoffeTypes ? 'coffee-button-selected' : ' ')
          }
        >
          <h4>Other</h4>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeTypes && (
        <select onChange={(e) =>{setSelectedCoffe(e.target.value)}}id='coffee-list' name='coffee-list'>
          <option value={null}> Select type</option>
          {coffeeOptions.slice(5).map((option, optionIndex) => {
            return (
              <option value={option.name} key={optionIndex}>
                {option.name} {option.caffeine}mg
              </option>
            );
          })}
        </select>
      )}
      <h4> Add the cost ($)</h4>
      <input className='w-full' type='number' placeholder='4.5' value={coffeeCost} onChange={(e) => {setCoffeeCost(e.target.value)}}/>
      <h4>Time since consumtion</h4>
      <div className='time-entry'>
        <div>
          <h6>Hours</h6>
          <select id='hours-select' onChange={(e) => {setHour(e.target.value)}}>
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23,
            ].map((hour, hourIndex) => {
              return (
                <option key={hourIndex} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <h6>Mins</h6>
          <select id='mins-select' onChange={(e) => {setMin(e.target.value)}} >
            {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
              return (
                <option key={minIndex} value={min}>
                  {min}
                </option>
              );
            })}
          </select>
        </div>
        <button onClick={handleSubmitForm}>Add Entry</button>
      </div>
    </>
  );
}
