import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './comp/pages/Home';
import CreatePost from './comp/pages/CreatePost';
import Login from './comp/pages/Login';
import { useState } from 'react';
import {signOut} from 'firebase/auth';
import {auth} from './comp/firebase/firebase-config'
import { User, Home } from 'react-feather';

function App() {
  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false);
      //geen navigate van RR-dom want buiten Router
      window.location.pathname = "/login"
    })
  }
  return (
    //Router bestaat uit 2 delen -> nav wat de front end is en Routes wat de router is
    <Router>
      <nav>
        <h2>Bart</h2>
        <Link to="/"><Home></Home></Link>
        {isAuth && <Link to="/createpost">Create post</Link>}
        {!isAuth ? <Link to="/login"><User> </User></Link> : <button onClick={signUserOut}>Log Out</button>}
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/createpost" element={<CreatePost></CreatePost>}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}></Login>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
