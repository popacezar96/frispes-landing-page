import {React} from 'react';

const SearchItem = (props)=>{
  return(
      <div className='search-item' onClick={props.openRect} tabIndex = '0'>
        <span>{props.title}</span>
        <p>{props.content}</p>
      </div>
  );
};

export default SearchItem;
