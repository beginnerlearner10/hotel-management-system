
import './App.css';
import Navbar from './component/Navbar';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AdminScreen from './screens/AdminScreen';
import BookingScreen from './screens/BookingScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/home' exact Component={HomeScreen} />
          <Route path='/book/:roomid/:fromdate/:todate' exact Component={BookingScreen}/>
          <Route path='/admin' exact Component={AdminScreen}/>
          <Route path='/register' exact Component={RegisterScreen}/>
          <Route path='/login' exact Component={LoginScreen}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
