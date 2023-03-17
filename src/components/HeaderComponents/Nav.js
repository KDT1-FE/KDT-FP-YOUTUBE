import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Nav = ({ setShowSidebar, setShowModal, inputdata, inputHandler,clickHandler }) => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };

  return (
    <div className='nav'>
      <div className='svg-img'>
        <button
          className='hamburger-btn'
          onClick={() => {
            setShowModal(prev => !prev);
          }}
        >
          <svg className='hamburger' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
            <path d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z' />
          </svg>
        </button>

        <img
          src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg'
          alt='Youtube Logo'
          onClick={goHome}
          className='logo'
          style={{ cursor: 'pointer' }}
        />
      </div>
      <form>
        <input type='text' placeholder='Search' value={inputdata} onChange={inputHandler}/>
        <button type='submit' className='search-btn' onClick={clickHandler}> 
          <FontAwesomeIcon className='glass' icon={solid('magnifying-glass')} />
        </button>
      </form>
      <div className='icons'>
        <svg className='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
          <path d='M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z' />
        </svg>

        <svg className='icon bell' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z' />
        </svg>

        <svg className='icon user' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z' />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
