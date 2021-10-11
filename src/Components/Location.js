import React, {useRef} from 'react';

const Location = (props) =>{

  //array of refferences to inputs to help select them when selecting labels from keyboard.
  //2 refferences to keep track of ref of each mapped city
  const inputFileRef = useRef([React.createRef(), React.createRef()]);

  // function that calls handleLoc when clicking on input
  function handleClick(e){

    props.handleLoc(e.target.value + ', ' + props.country)
  }

  // used when rendering the component with only one city
  function handleKeyDown(e){
    if (e.keyCode ===13){
      inputFileRef.current[0].current.click();
      //switch focus on Type components
      document.querySelector('.search-item:nth-child(3)').focus();
      //avoid activating keydown on focused element when focusing
      e.preventDefault();
    }
  }

  const currentCity = props.city;
  let currentCities;

  // sometimes props.city is an array of cities so if that is the case, there will be a label for each one
  // onKeyDown func makes input behave as if it was clicked by accessing its corresponding refference from the inputFileRef array of refferences.

  if(typeof currentCity === 'object'){
     currentCities = currentCity.map((city,i)=>{
         return <label htmlFor={city} key={i} tabIndex="0"
                onKeyDown={function(e) {
               if (e.keyCode ===13){
                 inputFileRef.current[i].current.click();
                 //switch focus on Type components
                 document.querySelector('.search-item:nth-child(3)').focus();
                 e.preventDefault();
                }
              }}>
               {city}
               <input type='radio' name="location" id={city} value={city} onClick={handleClick} ref={inputFileRef.current[i]}/>
             </label>
        });
      }
  else{
    currentCities = <label htmlFor={props.city} tabIndex="0" onKeyDown={handleKeyDown}>
            {props.city}
            <input type='radio' name="location" id={props.city} value={props.city} onClick={handleClick} ref={inputFileRef.current[0]}/>
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
