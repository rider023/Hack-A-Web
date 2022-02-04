import LandingPage from "./components/LandingPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Discover from "./components/Discover";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Appointments from './components/Appointments';
import Payments from './components/Payments';
import ConsultDoctor from './components/ConsultDoctor';
import DoctorAI from './components/DoctorAI';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path= "/" exact element = {<LandingPage/>}/>
        <Route path= "/Discover" exact element = {<Discover/>}/>
        <Route path= "/Signup" exact element = {<Signup/>}/>
        <Route path ="/SignIn" exact element = {<SignIn/>}/>
        <Route path ="/Dashboard" exact element = {<Dashboard/>}/>
        <Route path ="/Profile" exact element = {<Profile/>}/>
        <Route path ="/Appointments" exact element = {<Appointments/>}/>
        <Route path ="/Payments" exact element = {<Payments/>}/>
        <Route path ="/ConsultDoctor" exact element = {<ConsultDoctor/>}/>
        <Route path ="/DoctorAI" exact element = {<DoctorAI/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
