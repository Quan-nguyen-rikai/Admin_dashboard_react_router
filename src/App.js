import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import AboutAdd from './pages/About/AboutAdd';
import AboutList from './pages/About/AboutList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}>
            <Route path="list" element={<AboutList/>}/>
            <Route path="add" element={<AboutAdd/>}/>
          </Route>
          <Route path="/contact" element={<Contact/>}/> 
          <Route path="/error" element={<Error/>}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
