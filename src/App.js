import './App.css';
import {RiShareForwardLine} from 'react-icons/ri'

function App() {
  return (
    <div className="App">
      {/* Profile Image Div */}
      <div className="profile">
      <div id="profile__img"></div>
      <span className='share'><RiShareForwardLine /></span>
      </div>
      <h1>Adeleke Olukunle</h1>

      <div className="links">
      <a href="https://twitter.com/dat_leke" target="_blank" rel='noreferrer' id='twitter'>Twitter Link</a>
      <a href="https://training.zuri.team/" target="_blank" rel='noreferrer' id='btn__zuri'>Zuri Team</a>
      <a href="https://books.zuri.team/" target="_blank" rel='noreferrer' id='books'>Zuri Books</a>
      </div>
      
    </div>
  );
}

export default App;
