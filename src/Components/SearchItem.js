import {React} from 'react';

const SearchItem = (props)=>{

  const title = props.title;
  const content = props.content;

  return(
      <button className='search-item'>
        <span>{title}</span>
        <p>{content}</p>
      </button>
  );
};

export default SearchItem;
