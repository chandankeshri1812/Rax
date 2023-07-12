import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Home from './Components/Home'
import Courses from './Components/Courses'
import AllProfessor from './Components/AllProfessor'
import Login from './Components/Login'
import Signin from './Components/Signin'
import createProfessor from './Components/CreateProfessor';

import CreateCourse from './Components/CreateCourse'
import './css/navbar.css'
import './css/user.css'


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/courses" exact Component={Courses} />
        <Route path="/createCourse" exact Component={CreateCourse} />

        <Route path="/professor" exact Component={AllProfessor} />
        <Route path="/createprofessor" exact Component={createProfessor} />
        <Route path="/login" exact Component={Login} />
        <Route path="/signin" exact Component={Signin} />

      </Routes>




      <Footer />
    </>
  );
}

export default App;
