import './App.css';
import ScheduleCalendar from './components/hollow';
import Mallow from './components/mallow';
import Chat from './pages/Chat';
import Registration from './pages/Registration';
import Schedule from './pages/Schedule';
import WeekView from './pages/WeekView';
import { createTheme, ThemeProvider } from '@mui/material/styles';
function App() {
  const theme = createTheme(
    {
      palette: {
        primary: { main: '#45A5A1' },
        background: '#45A5A1'
      },
    },
  );
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        {/* <Chat /> */}
        {/* <Registration /> */}
        {/* <Schedule /> */}
        {/* <ScheduleCalendar /> */}
        <WeekView />
        <Mallow />
      </div>
    </ThemeProvider>

  );
}

export default App;
