import React, {useState} from 'react';
import SearchItem from './SearchItem';
import Location from './Location';
import {locations} from '../locations';
import Type from './Type';
import Calendar from './Calendar';


window.onload = function(){
  const rect = document.querySelector('.form-rectangle');

  const first = document.querySelector('.search-item:nth-child(2)');
  const second = document.querySelector('.search-item:nth-child(3)');
  const third = document.querySelector('.search-item:nth-child(4)');

  const toggleLocations =  document.querySelector(".show-locations");
  const toggleTypes = document.querySelector(".show-type");
  const toggleCalendar = document.querySelector(".calendar");

  const countryNames = document.querySelectorAll(".location p");
  const typeP = document.querySelector(".show-type p");

  const calendarMonth = document.querySelector(".month");
  const calendarWeekdays = document.querySelector(".weekdays");
  const calendarDays = document.querySelector(".days");


  document.onclick = function(e){
    if(e.target === first){

      if (toggleLocations.style.display === 'none' || toggleLocations.style.display === ''){
        rect.style.display = 'block';
        toggleLocations.style.display = 'block';

        //hide the other labels
        toggleTypes.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }
      else if(toggleLocations.style.display === 'block'){
        rect.style.display = 'none';
        toggleLocations.style.display = 'none'
      }
    }

    else if (e.target === second){
      if (toggleTypes.style.display === '' || toggleTypes.style.display === 'none'){

        toggleTypes.style.display = 'block';
        rect.style.display = 'block';

        //hide the other labels
        toggleLocations.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }

      else if(toggleTypes.style.display === 'block'){
        rect.style.display = 'none';
        toggleTypes.style.display = 'none';
      }
    }

    else if(e.target === third){
      if (toggleCalendar.style.display === '' || toggleCalendar.style.display === 'none'){

        toggleCalendar.style.display = 'block';
        rect.style.display = 'block';

        //hide the other labels
        toggleLocations.style.display = 'none';
        toggleTypes.style.display = 'none';
      }

      else if(toggleCalendar.style.display === 'block'){
        rect.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }
    }

    // avoid closing when click on country name or type paragraph
    else if(toggleLocations.style.display === 'block'){

      let countryClick = false;

      // don't hide rectungle only if u click on rect, toggleLocations or p (country-name)
      if (e.target === rect || e.target === toggleLocations || e.target.className === 'country-name'){
        countryClick = true;
      }


      if(countryClick === false){
        rect.style.display = 'none';
        toggleLocations.style.display = 'none';
      }

    }

    else if(toggleTypes.style.display === 'block'){
      let typeClick = false;

      if(e.target === typeP || e.target === rect || e.target === toggleTypes){
        typeClick = true;
      }

      if(typeClick === false){
        rect.style.display = 'none';
        toggleTypes.style.display = 'none';
      }
    }

    // only hide calendar if the user selects a day or clicks outside of the calendar
    else if(toggleCalendar.style.display === 'block'){

      let selectedDay = false;

      //checks if the selected elements is a child of specific nodes
      if (calendarMonth.contains(e.target) || calendarWeekdays.contains(e.target) ||
      e.target === rect || e.target === calendarDays){
        selectedDay = true;
      }

      if(selectedDay ===false){
        rect.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }
    }

    else {
      rect.style.display = 'none';
      //hide all that is inside rect
      toggleLocations.style.display = 'none';
      toggleTypes.style.display = 'none';
      toggleCalendar.style.display = 'none';
    }
  }
}

//today's date - initial date
function todayDate(){
  const date = new Date();
  const month = date.toLocaleString('default',{ month:'short'});
  const today = date.getDate() + ' ' + month + ' ' + date.getFullYear();

  return today;
}


const searchForm = [{title: 'Location'},{title: 'Type'},{title: 'Date'}];


const Header = ()=>{

  const [loc, setLoc] = useState('Vienna, Austria');
  searchForm[0].content = loc;

  const [type, setType] = useState('Private Office');
  searchForm[1].content = type;

  const [date, setDate] = useState(todayDate());
  searchForm[2].content = date;


  // callback function to use setLoc from Location to Header component
  function changeLocation(newValue){
    setLoc(newValue);
  }

  function changeType(newValue){
    setType(newValue);
  }

  function changeDate(newValue){
    setDate(newValue);
  }


  // 3 search items mapped as components in the first form
  const searchItems = searchForm.map(({title,content,formFunc})=>{
    return <SearchItem key={title} title={title} content={content}/>
  });

  //locations mapped as components for -> first SearchItem
  const allLocations = locations.map(({country,city})=>{
    return <Location key={country} country={country} city={city} handleLoc={changeLocation}/>
  });


  return(

    <header className="App-header">
      <nav>
        <span>Frispes.</span>
        <ul>
          <li><a>Home</a></li>
          <li><a>Workspace</a></li>
          <li><a>Services</a></li>
          <li><a>Events</a></li>
          <li><a>Reviews</a></li>
          <li><a>Contact Us</a></li>
        </ul>
        <div className="CTA">
          <a href="#" className="log-in">Log in</a>
          <a href="#" className="sign-in">Sign up</a>
        </div>
      </nav>

      <div className="intro">
        <span>Introducing</span>
      </div>

      <div className='content'>
        <h1><span>Revolutionary</span> co-working space to realize your innovation</h1>
        <p>In frispes, we spearhead new initiatives and provide mentorship to a new startup, and help grow their opportunities in key local,
        regional and global markets</p>
      </div>

      <div className='search-form'>
        <p>Find your space now</p>

        {searchItems}

        <form>

          <div className='form-rectangle'>

            <div className='show-locations'>{allLocations}</div>

            <Type handleType = {changeType}/>

            <Calendar handleDate = {changeDate}/>

          </div>


          <button type='submit'>FIND MY SPACE</button>
        </form>


      </div>
    </header>

  );
}


export default Header;
