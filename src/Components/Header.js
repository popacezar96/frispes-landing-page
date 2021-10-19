import React, {useState, useEffect} from 'react';
import SearchItem from './SearchItem';
import Location from './Location';
import {locations} from '../locations';
import Type from './Type';
import Calendar from './Calendar';

import  office1 from '../office1.png';
import  office2 from '../office2.png';
import  office3 from '../office3.jpg';


window.onload = function(){
  const rect = document.querySelector('.form-rectangle');

  const first = document.querySelector('.search-item:nth-child(2)');
  const second = document.querySelector('.search-item:nth-child(3)');
  const third = document.querySelector('.search-item:nth-child(4)');

  const toggleLocations =  document.querySelector(".show-locations");
  const toggleTypes = document.querySelector(".show-type");
  const toggleCalendar = document.querySelector(".calendar");

  const typeP = document.querySelector(".show-type p");

  const calendarMonth = document.querySelector(".month");
  const calendarWeekdays = document.querySelector(".weekdays");
  const calendarDays = document.querySelector(".days");

  const buttonArrow = document.querySelectorAll('.search-item .dropdown-arrow');

  //rotate arrow with whose index corresponds to a certain element
  function rotateArrow(el){

    buttonArrow.forEach((item,i) => {
      if(i===el){
        item.style.transform = 'rotate(-90deg)';
      }
      else{
        item.style.transform = 'rotate(0deg)';
      }
    });
  }

  document.onkeydown = function (e){
    //switch focus after selecting items from keyboard if pressing enter
    if(e.keyCode===13){
      if (e.target === first){

        rotateArrow(0);
        rect.classList.add('form-rect-fade-in');
        toggleLocations.style.display = "block";

        document.querySelector("label[for='Vienna']").focus();

        //hide the other components
        toggleTypes.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }

      else if(e.target === second){

        rotateArrow(1);
        rect.classList.add('form-rect-fade-in');
        toggleTypes.style.display = "block";

        document.querySelector("label[for='private']").focus();

        //hide the other components
        toggleLocations.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }
      else if(e.target === third){

        rotateArrow(2);
        rect.classList.add('form-rect-fade-in');
        toggleCalendar.style.display = "block";

        document.querySelector(".right-arrow").focus();

        //hide the other components
        toggleLocations.style.display = 'none';
        toggleTypes.style.display = 'none';
      }
    }
    //hide form related windows if esc key is pressed
    else if (e.keyCode===27){

      rect.classList.remove('form-rect-fade-in');

      //return search-form arrows to original position
      buttonArrow.forEach((item) => {
        item.style.transform = 'rotate(0deg)';
      });

      toggleLocations.style.display = 'none';
      toggleTypes.style.display = 'none';
      toggleCalendar.style.display = 'none';
    }
  }

  document.onclick = function(e){
    if(e.target === first){
      if (toggleLocations.style.display === 'none' || toggleLocations.style.display === ''){

        rect.classList.add('form-rect-fade-in');
        rotateArrow(0);
        toggleLocations.style.display = 'block';

        //hide the other components
        toggleTypes.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }
      else if(toggleLocations.style.display === 'block'){

        buttonArrow[0].style.transform = 'rotate(0deg)';
        rect.classList.remove('form-rect-fade-in');

        toggleLocations.style.display = 'none';
      }
    }

    else if (e.target === second){
      if (toggleTypes.style.display === '' || toggleTypes.style.display === 'none'){

        rotateArrow(1);
        rect.classList.add('form-rect-fade-in');

        toggleTypes.style.display = 'block';

        //hide the other components
        toggleLocations.style.display = 'none';
        toggleCalendar.style.display = 'none';
      }

      else if(toggleTypes.style.display === 'block'){

        buttonArrow[1].style.transform = 'rotate(0deg)';
        rect.classList.remove('form-rect-fade-in');

        toggleTypes.style.display = 'none';
      }
    }

    else if(e.target === third){
      if (toggleCalendar.style.display === '' || toggleCalendar.style.display === 'none'){

        rotateArrow(2);
        rect.classList.add('form-rect-fade-in');

        toggleCalendar.style.display = 'block';

        //hide the other components
        toggleLocations.style.display = 'none';
        toggleTypes.style.display = 'none';
      }

      else if(toggleCalendar.style.display === 'block'){

        buttonArrow[2].style.transform = 'rotate(0deg)';
        toggleCalendar.style.display = 'none';

        rect.classList.remove('form-rect-fade-in');

      }
    }

    // avoid closing when click on country name
    else if(toggleLocations.style.display === 'block'){

      let countryClick = false;

      // don't hide rectangle only if u click on rect, toggleLocations or p (country-name)
      if (e.target === rect || e.target === toggleLocations || e.target.className === 'country-name'){
        countryClick = true;
      }

      if(countryClick === false){

        rect.classList.remove('form-rect-fade-in');
        buttonArrow[0].style.transform = 'rotate(0deg)';
        toggleLocations.style.display = 'none';
      }
    }

    // avoid closing when click on type paragraph
    else if(toggleTypes.style.display === 'block'){
      let typeClick = false;

      if(e.target === typeP || e.target === rect || e.target === toggleTypes){
        typeClick = true;
      }

      if(typeClick === false){

        rect.classList.remove('form-rect-fade-in');
        buttonArrow[1].style.transform = 'rotate(0deg)';
        toggleTypes.style.display = 'none';
      }
    }

    // only hide calendar if the user selects a day of the displayed month or clicks outside of the calendar
    else if(toggleCalendar.style.display === 'block'){

      let selectedDay = false;

      //avoid hiding calendar if the selected element is a child of one of the nodes or is a specific node
      if (calendarMonth.contains(e.target) || calendarWeekdays.contains(e.target) ||
      e.target === rect || e.target === calendarDays || e.target.className === 'prev-date' ||
      e.target.className === 'next-date'){
        selectedDay = true;
      }

      if(selectedDay ===false){

        rect.classList.remove('form-rect-fade-in');
        buttonArrow[2].style.transform = 'rotate(0deg)';
        toggleCalendar.style.display = 'none';
      }
    }

    else {

      rect.classList.remove('form-rect-fade-in');
      //each arrow in search-form returns to norma position if clicked outside the form
      buttonArrow.forEach((item) => {
        item.style.transform = 'rotate(0deg)';
      });

      //hide all that is inside rect
      toggleLocations.style.display = 'none';
      toggleTypes.style.display = 'none';
      toggleCalendar.style.display = 'none';
    }
  }
}



//today's initial date
function todayDate(){
  const date = new Date();
  const month = date.toLocaleString('default', { month:'short'});
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


  // callback function to use set Location, Type and Date from child components to Header component
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
  const searchItems = searchForm.map(({title,content})=>{
    return <SearchItem key={title} title={title} content={content}/>
  });

  //locations mapped as components for first SearchItem
  const allLocations = locations.map(({country,city})=>{
    return <Location key={country} country={country} city={city} handleLoc={changeLocation}/>
  });

  // button func setting default values for location and type if no user input
  function hasDefault(){
    // for type
    const typeInputs = document.querySelectorAll("input[name='type']");
    let checkedType = false;

    for (let i=0; i<=typeInputs.length-1; i++){
      if(typeInputs[i].checked){
        checkedType = true;
        break;
      }
    }
    if (!checkedType){
      typeInputs[0].checked = true;
    }

    // for location
    const locationInputs = document.querySelectorAll("input[name='location']");
    let checkedlocation = false;

    for (let i=0; i<=locationInputs.length-1; i++){
      if(locationInputs[i].checked){
        checkedlocation = true;
        break;
      }
    }
    if (!checkedlocation){
      locationInputs[0].checked = true;
    }
  }

  // use setInterval after the component loaded
  useEffect(()=>{

    // to switch between images in first image slider
    const firstSliderImgs = document.querySelectorAll(".first-img-slider img");
    const firstSliderSpans = document.querySelectorAll(".slider-indicator span");

    setInterval(()=>{
      // change styles of images and spans every 3 seconds

      for(let i=0; i<firstSliderImgs.length; i++){
        const currentImage = firstSliderImgs[i];
        const itemStyles = window.getComputedStyle(currentImage);

        if(itemStyles.opacity === '1'){

          currentImage.style.opacity = '0';
          firstSliderSpans[i].classList.remove('image-span');

          if (i<2){

            firstSliderImgs[i+1].style.opacity = '1';
            firstSliderSpans[i+1].classList.add('image-span');
          }

          else {

            firstSliderImgs[0].style.opacity = '1';
            firstSliderSpans[0].classList.add('image-span');
          }
          break;
        }
      }
    },4000);

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

            <Type handleType = {changeType} selectedType = {searchForm[1].content}/>

            <Calendar handleDate = {changeDate} selectedDate = {searchForm[2].content}/>

          </div>

          <button type='submit' onClick={hasDefault}>FIND MY SPACE</button>

        </form>

      </div>

      <div className='first-img-slider'>
        <img src={office1} className='current-slider-img' alt=' '/>
        <img src={office2} alt=' '/>
        <img src={office3} alt=' '/>
      </div>

      <div className='slider-indicator'>
        <span className='image-span'></span>
        <span></span>
        <span></span>
      </div>

    </header>

  );
}


export default Header;
