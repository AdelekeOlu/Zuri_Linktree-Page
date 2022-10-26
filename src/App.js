import './App.css';
import {RiShareForwardLine} from 'react-icons/ri'
import {BsGithub} from 'react-icons/bs'

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
      <a href="https://books.zuri.team/python-for-beginners?ref_id=<Adeleke Olukunle>" target="_blank" rel='noreferrer' id='book__python'>Python Books</a>
      <a href="https://background.zuri.team" target="_blank" rel='noreferrer' id='pitch'>Background Check for Coders</a>
      <a href="https://books.zuri.team/design-rules" target="_blank" rel='noreferrer' id='book__design'>Design Books</a>
      </div>

      <div className='socials'>
        <div className="stackimg"></div>
      <a href="https://github.com/AdelekeOlu" target="_blank" rel='noreferrer' id='github'><span><BsGithub /></span></a>
      </div>
      
    </div>
  );
}

export default App;
