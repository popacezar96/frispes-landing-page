import {React} from 'react';

const SearchItem = (props)=>{
  return(
      <button className='search-item' onClick={props.openRect}>
        <span>{props.title}</span>
        <p>{props.content}</p>
      </button>
  );
};

export default SearchItem;
