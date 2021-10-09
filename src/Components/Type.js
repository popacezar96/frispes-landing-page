import React, {useRef} from 'react';


const Type = (props) =>{

  // refferences for private and publlic inputs
  const typeRef = useRef([React.createRef(), React.createRef()]);

  function handleClick(e){
    props.handleType(e.target.value + ' Office')
  }


  return (
    <div className='show-type'>
      <p>Type</p>
      <div>
        <label htmlFor='private' tabIndex="0"
        onKeyDown={function(e){
          if(e.keyCode===13){
            typeRef.current[0].current.click();
          }
        }} >
          Private Office
          <input
            type='radio'
            name="type"
            id="private"
            value="Private"
            onClick={handleClick}
            ref = {typeRef.current[0]}
          />
        </label>
      </div>

      <div>
        <label htmlFor='public' tabIndex="0"
        onKeyDown={function(e){
          if(e.keyCode===13){
            typeRef.current[1].current.click();
          }
        }}>
          Public Office
          <input
            type='radio'
            name="type"
            id="public"
            value="Public"
            onClick={handleClick}
            ref = {typeRef.current[1]}
            />
        </label>
      </div>
    </div>


  );
};

export default Type;
