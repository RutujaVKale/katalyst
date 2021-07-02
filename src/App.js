
import './App.css';

import Loginuser from './components/login/Loginuser';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/MainPage/Layout';


function App() {

  return (
    <div className="">   
     
      {/* <Navbar/>
      <Layout/> */}
      {
        localStorage.getItem("userid")==undefined ? <Loginuser/> : <span> <Navbar/><Layout/></span>

      }
     
     
      
    </div>
  );
}

export default App;
