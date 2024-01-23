import React from 'react';

const ScheduleCalendar = () => {
  const events = [
    { date: '2024-01-22', title: 'Event 1', location: 'Room A' },
    { date: '2024-01-22', title: 'Event 2', location: 'Main Hall' },
  ];

  const renderEvents = (date) => {
    const filteredEvents = events.filter((event) => event.date === date);

    return (
      <ul className="list-group border-0">
        {filteredEvents.map((event, index) => (
          <li key={index} className="list-group-item border-0">
            <h6>{event.title}</h6>
            <p className="mb-0">{event.location}</p>
          </li>
        ))}
      </ul>
    );
  };


const renderCalendar = () => {
    const topRow = ['week 4', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    return (
      <table className="schedule-table">
        <thead>
          <tr>
            {topRow.map((day, index) => {
                if(day === "week 4"){
                    return <th key={index} scope="col">{day}</th>
                }else{
                    return <th key={index} scope="col">{day}</th>
                }
            }
            )}
          </tr>
        </thead>
        <tbody>
          {/* Render your calendar cells here */}
          {/* You can use a loop to generate the calendar cells based on your requirements */}
          {/* <tr>
            <td data-date="2024-01-19">{renderEvents('2024-01-19')}</td>
            <td data-date="2024-01-20">{renderEvents('2024-01-20')}</td>
            <td data-date="2024-01-21">{renderEvents('2024-01-21')}</td>
            <td rowSpan={2} data-date="2024-01-22">{renderEvents('2024-01-22')}</td>
            <td data-date="2024-01-23">{renderEvents('2024-01-23')}</td>
            <td data-date="2024-01-24">{renderEvents('2024-01-24')}</td>
            <td data-date="2024-01-25">{renderEvents('2024-01-25')}</td>
            <td data-date="2024-01-26">{renderEvents('2024-01-26')}</td>
          </tr> */}
          <tr>
            <td >{renderEvents('2024-01-19')}</td>
            <td >{renderEvents('2024-01-20')}</td>
            <td >{renderEvents('2024-01-21')}</td>
            <td rowSpan={2} >{renderEvents('2024-01-22')}</td>
            <td >{renderEvents('2024-01-23')}</td>
            <td >{renderEvents('2024-01-24')}</td>
            <td >{renderEvents('2024-01-25')}</td>
            <td >{renderEvents('2024-01-26')}</td>
          </tr>
          <tr>
            <td >{renderEvents('2024-01-19')}</td>
            <td >{renderEvents('2024-01-20')}</td>
            <td >{renderEvents('2024-01-21')}</td>
            <td rowSpan={2} >{renderEvents('2024-01-22')}</td>
            <td >{renderEvents('2024-01-23')}</td>
            <td >{renderEvents('2024-01-24')}</td>
            <td >{renderEvents('2024-01-25')}</td>
            <td >{renderEvents('2024-01-26')}</td>
          </tr>
          <tr>
            <td >{renderEvents('2024-01-19')}</td>
            <td >{renderEvents('2024-01-20')}</td>
            <td >{renderEvents('2024-01-21')}</td>
            <td rowSpan={2} >{renderEvents('2024-01-22')}</td>
            <td >{renderEvents('2024-01-23')}</td>
            <td >{renderEvents('2024-01-24')}</td>
            <td >{renderEvents('2024-01-25')}</td>
            <td >{renderEvents('2024-01-26')}</td>
          </tr>
          <tr>
            <td >{renderEvents('2024-01-19')}</td>
            <td >{renderEvents('2024-01-20')}</td>
            <td >{renderEvents('2024-01-21')}</td>
            <td rowSpan={2} >{renderEvents('2024-01-22')}</td>
            <td >{renderEvents('2024-01-23')}</td>
            <td >{renderEvents('2024-01-24')}</td>
            <td >{renderEvents('2024-01-25')}</td>
            <td >{renderEvents('2024-01-26')}</td>
          </tr>


          
        </tbody>
      </table>
    );
  };
    
  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4">Schedule Calendar</h2>
      <div className="row">
        <div className="col-md-8">
          {renderCalendar()}
        </div>
        {/* <div className="col-md-4">
          <h4>Upcoming Events</h4>
          {renderEvents('2024-01-22')}
        </div> */}
      </div>
    </div>
  );
};

export default ScheduleCalendar;
