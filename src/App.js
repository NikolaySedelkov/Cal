import logo from './logo.svg';
import './App.css';
import Calendar from './Calendar';

function App() {
  var today = new Date();
  return (
    <Calendar date={today}/>
  );
}

export default App;
