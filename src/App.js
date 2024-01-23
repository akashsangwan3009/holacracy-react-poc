import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LoginPage from './pages/loginPage/LoginPage';
import DashboardPage from './pages/dashboard/DasboardPage';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes/>}>
            <Route path="/dashboard" element={<DashboardPage/>} exact/>
          </Route>
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path='/' element={<Navbar/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
