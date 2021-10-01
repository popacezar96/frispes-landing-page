import React from 'react';

const Location = (props) =>{

  // function that calls handleLoc on Events
  function handleClick(e){
    props.handleLoc(e.target.value + ', ' + props.country)
  }
  const currentCity = props.city;
  let currentCities;

  // sometimes props.city is an array of cities so if that is the case, there will be a label for each one
  if(typeof currentCity === 'object'){
     currentCities = currentCity.map((city)=>{
      return <label htmlFor={city} key={city}>
            {city}
            <input type='radio' name="location" id={city} value={city} onClick={handleClick} />
          </label>
        });
      }
  else{
    currentCities = <label htmlFor={props.city}>
            {props.city}
            <input type='radio' name="location" id={props.city} value={props.city} onClick={handleClick}/>
          </label>

  }
  return (
    <div className = 'location'>
      <p className = 'country-name'>{props.country}</p>
      {currentCities}
    </div>
  );
}

export default Location;
