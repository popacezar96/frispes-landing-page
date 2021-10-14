import {React} from 'react';
import dropdown from '../dropdown-icon.svg';
const SearchItem = (props)=>{

  const title = props.title;
  const content = props.content;

  return(
      <button className='search-item'>
        <span>{title}</span>
        <p>{content}</p>
        <img src={dropdown} className='dropdown-arrow' alt="D"/>
      </button>
  );
};

export default SearchItem;
