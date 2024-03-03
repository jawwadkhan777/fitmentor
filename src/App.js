import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
// import Blogs from './pages/Blogs';
import Workouts from './pages/Workouts';
import WorkoutDetails from './pages/WorkoutDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/workouts' element={<Workouts/>}/>
        <Route path='/workouts/:id' element={<WorkoutDetails/>}/>
        {/* <Route path='/blogs' element={<Blogs/>}/> */}
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
