import React, {useEffect, useState} from 'react'
import CalendarDatePicker from '../components/calendarDatePicker'
import ScheduleSidebar from '../components/scheduleSidebar'

function Schedule() {
    const [currentCourse, setCurrentCourse] = useState({});
    useEffect(() => {
        console.log(currentCourse)
    }, [currentCourse])
  return (
    <section className='schedule-container container d-flex justify-content-center align-items-start  '>
        <ScheduleSidebar setCurrentCourse={setCurrentCourse} />
        <CalendarDatePicker currentCourse={currentCourse} />
    </section>
  )
}

export default Schedule