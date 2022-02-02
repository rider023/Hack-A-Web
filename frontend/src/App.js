import LandingPage from "./components/LandingPage";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path= "/" exact element = {<LandingPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
