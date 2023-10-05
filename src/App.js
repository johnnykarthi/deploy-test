
import './App.css';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
     
       <BrowserRouter>
       <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/login'>Login</Link>
         <Routes>
           <Route index element={<Home/>}></Route>
           <Route path='/about' element={<About/>}></Route>
           <Route path='/login' element={<Login/>}></Route>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
