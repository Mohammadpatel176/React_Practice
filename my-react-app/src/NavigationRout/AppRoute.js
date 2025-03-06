import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import Home from '../Components/Home';
import About from '../Components/Abount';
import Contect from '../Components/Contect';
import DashboarLayout from "../DashboardLayout";
import LoginPage from "../Login/Login";
import { useEffect } from "react";

const AppRoutes=()=>{
const Menues = () => {
  useEffect(() => {
    console.log('Component has mounted');
    return () => {
      console.log('Cleanup logic here');
    };
  }, []); 
}
    const authToken= localStorage.getItem('authToken');
return(
<Routes>
    <Route path="/" element={authToken ? <DashboarLayout /> : <LoginPage />} />
    <Route path="/about" element={<About/>} />
    <Route path="/contect" element={<Contect/>} />
    <Route path="/dashboard" element={authToken ? <DashboarLayout /> : <LoginPage />}/>
</Routes>
);
}

export default AppRoutes;
