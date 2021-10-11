import {React} from 'react';

const SearchItem = (props)=>{
  return(
      <button className='search-item'>
        <span>{props.title}</span>
        <p>{props.content}</p>
      </button>
  );
};

export default SearchItem;
