import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

import appointments from './today-appointments';

const classes = {
    todayCell: `todayCell`,
    weekendCell: `weekendCell`,
    today: `today`,
    weekend: `weekend`,
};

const StyledWeekViewTimeTableCell = styled(WeekView.TimeTableCell)(({ theme }) => ({
    [`&.${classes.todayCell}`]: {
        backgroundColor: alpha('#45A5A1', 0.1),
        '&:hover': {
            backgroundColor: alpha('#45A5A1', 0.14),
        },
        '&:focus': {
            backgroundColor: alpha('#45A5A1', 0.16),
        },
    },
    [`&.${classes.weekendCell}`]: {
        backgroundColor: alpha('#65B4B4', 0.04),
        '&:hover': {
            backgroundColor: alpha('#65B4B4', 0.04),
        },
        '&:focus': {
            backgroundColor: alpha('#65B4B4', 1.04),
        },
    },
}));

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)(({  }) => ({
    [`&.${classes.today}`]: {
        backgroundColor: alpha('#45A5A1', 0.16),
    },
    [`&.${classes.weekend}`]: {
        backgroundColor: alpha('#65B4B4', 0.06),
    },
}));

const TimeTableCell = (props) => {
    const { startDate } = props;
    const date = new Date(startDate);

    if (date.getDate() === new Date().getDate()) {
        return <StyledWeekViewTimeTableCell {...props} className={classes.todayCell} />;
    } if (date.getDay() === 0 || date.getDay() === 6) {
        return <StyledWeekViewTimeTableCell {...props} className={classes.weekendCell} />;
    } return <StyledWeekViewTimeTableCell {...props} />;
};

const DayScaleCell = (props) => {
    const { startDate, today } = props;

    if (today) {
        return <StyledWeekViewDayScaleCell {...props} className={classes.today} />;
    } if (startDate.getDay() === 0 || startDate.getDay() === 6) {
        return <StyledWeekViewDayScaleCell {...props} className={classes.weekend} />;
    } return <StyledWeekViewDayScaleCell {...props} />;
};

function Mallow() {
    return (
        <Paper>
            <Scheduler
                data={appointments}
                height={660}
            >
                <ViewState />
                <WeekView
                    startDayHour={9}
                    endDayHour={19}
                    timeTableCellComponent={TimeTableCell}
                    dayScaleCellComponent={DayScaleCell}
                />
                <Appointments />
            </Scheduler>
        </Paper>
    )
};
export default Mallow;