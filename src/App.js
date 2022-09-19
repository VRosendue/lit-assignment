import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import './App.css';
import Login from './views/login';
import Signs from './views/signs';
import Profile from './views/profile';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/signs" element={ <Signs />} />
        <Route path="/profile" element={ <Profile />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
