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
import Doctors from './components/Doctors';
import DoctorProfile from './components/DoctorProfile';
import DoctorSignIn from './components/DoctorSignIn'
import DoctorSignUp from './components/DoctorSignUp'
import Categories from "./components/Categories";
import DoctorDashboard from "./components/DoctorDashboard";
import Patients from "./components/Patients";
import DoctorAppointments from "./components/DoctorAppointments";
import DoctorReports from "./components/DoctorReports";
import NewReport from "./components/NewReport";
import BookAppointment from "./components/BookAppointment";
import VideoCall from "./video-call/App"

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
        <Route path ="/ConsultDoctor/Doctors" exact element = {<Doctors/>}/>
        <Route path="/DoctorProfile" exact element = {<DoctorProfile/>}/>
        <Route path="/DoctorSignIn" exact element = {<DoctorSignIn/>}/>
        <Route path="/DoctorSignUp" exact element = {<DoctorSignUp/>}/>
        <Route path="/Categories" exact element = {<Categories/>}/>
        <Route path="/DoctorDashboard" exact element = {<DoctorDashboard/>}/>
        <Route path="/Patients" exact element = {<Patients/>}/>
        <Route path="/DoctorAppointments" exact element = {<DoctorAppointments/>}/>
        <Route path="/DoctorReports" exact element = {<DoctorReports/>}/>
        <Route path="/NewReport" exact element = {<NewReport/>}/>
        <Route path="/BookAppointment" exact element = {<BookAppointment/>}/>
        <Route path="/VideoCall" exact element = {<VideoCall/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
