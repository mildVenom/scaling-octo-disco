import React, { useState } from 'react';
import { DatePicker, StaticDateTimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CalendarDatePicker({ currentCourse }) {
  const [selectedDate, handleDateChange] = useState(new Date());
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#45A5A1' },
      },
    },
  );


  return (
    <div className='calendar border w-100 px-5 py-2'>
      <h3 className="h4 text-center py-3">{currentCourse.name ? currentCourse.name : "Select A Course"}</h3>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} style={{ backgroundColor: "red" }}>
          <StaticDateTimePicker
            defaultValue={dayjs(new Date())}
          />
        </LocalizationProvider>

      </ThemeProvider>
    </div>
  );

}

export default CalendarDatePicker;
