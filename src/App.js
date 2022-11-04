import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/contact' element= {<Contact />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
