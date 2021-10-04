import React from 'react';

const Calendar = ()=>{
  return(
      <div className="calendar">
        <div className="month">

          <div className="date">
            <h1>September</h1>
            <p className="year-count">2021</p>
          </div>

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
