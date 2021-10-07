import React, {useEffect} from 'react';
import leftArrow from '../left-icon.svg';
import rightArrow from '../right-icon.svg';

const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").textContent = months[date.getMonth()];
  document.querySelector(".date p").textContent = date.getFullYear();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
        days += `<div>${i}</div>`;
      }
    else {
        days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

const Calendar = (props)=>{

  //turn date into array to access day, month, year individually
  const dateComponent = props.selectedDate.split(" ");

  //adds handleDate function as a click event on each displayed day of a month and highlights selected day
  function addClickOnDays(){

    const allDisplayedDays = document.querySelectorAll(".days div");

    const currentMonth = document.querySelector(".date h1").textContent.substring(0,3);
    const currentYear = document.querySelector(".date p").textContent;


    for (let i=0; i<=allDisplayedDays.length-1; i++){

      // targeting only the days of the current month
      if((!allDisplayedDays[i].classList.contains('prev-date')) &&
      (!allDisplayedDays[i].classList.contains('next-date'))){

        //highlighting the day matching the day in the Date component
        if(dateComponent[0] === allDisplayedDays[i].textContent &&
            dateComponent[1] === currentMonth &&
            dateComponent[2] === currentYear){

              allDisplayedDays[i].setAttribute('class','selected-day');
          }

        //adding click events on targeted days
        allDisplayedDays[i].onclick = (e)=>{
          props.handleDate(e.target.textContent +' '+ currentMonth + ' ' + currentYear);
          };
      };

    }
  }

  useEffect(()=>{
    document.querySelector(".left-arrow").onclick = () => {

      date.setMonth(date.getMonth() - 1);
      renderCalendar();

      //add click event on displayed days
      addClickOnDays();
    };

    document.querySelector(".right-arrow").onclick = () => {

      date.setMonth(date.getMonth() + 1);
      renderCalendar();

      //add click event on displayed days
      addClickOnDays();
    };

    renderCalendar();

    //add click event on displayed days
    addClickOnDays();
  });

  return(
      <div className="calendar">
        <div className="month">
          <img src={leftArrow} className='left-arrow'/>
          <div className="date">
            <h1></h1>
            <p></p>
          </div>
          <img src= {rightArrow} className='right-arrow'/>
        </div>
        <div className="weekdays">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <div className="days"></div>
      </div>
  );
}

export default Calendar;
