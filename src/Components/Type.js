import React from 'react';


const Type = (props) =>{

  function handleClick(e){
    props.handleType(e.target.value + ' Office')
  }

  return (
    <div className='show-type'>
      <p>Type</p>
      <div>
        <label htmlFor='private'>
          Private Office
          <input
            type='radio'
            name="type"
            id="private"
            value="Private"
            onClick={handleClick}
          />
        </label>
      </div>

      <div>
        <label htmlFor='public'>
          Public Office
          <input
            type='radio'
            name="type"
            id="public"
            value="Public"
            onClick={handleClick}
            />
        </label>
      </div>
    </div>


  );
};

export default Type;
