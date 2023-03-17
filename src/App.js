import { useState } from 'react';
import './App.css';
import Nav from './components/HeaderComponents/Nav';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import ChannelPage from './pages/ChannelPage';
import { Outlet, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './components/SidebarComponents/Sidebar';
import SideModal from './components/SidebarComponents/SideModal';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  display: flex;
  height: 100vh - 75px;
  transition: background-color 300ms;
  ${({ showModal }) =>
    showModal ? 'background-color: rgba(0, 0, 0, 0.5)' : 'white'};
`;

const OutletWrapper = styled.div`
  ${({ showModal }) => showModal && 'z-index: -10'}
`;

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputdata, setInputData] = useState("")
  const navigate = useNavigate()
  const inputHandler = (e) => {
    setInputData(e.target.value)
    console.log(inputdata)
  }
  const clickHandler = ()=> {
    navigate(`/search/${inputdata}`)
    setInputData('')
  }
  return (
    <div>
      <Nav setShowModal={setShowModal} inputdata={inputdata} inputHandler={inputHandler} clickHandler={clickHandler}/>
      <Container onClick={() => setShowModal(false)} showModal={showModal}>
        <Sidebar />

        <SideModal showModal={showModal} />
        <OutletWrapper showModal={showModal}>
          <Outlet />
        </OutletWrapper>
      </Container>

    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search/:searchId' element={<SearchPage />}/>
          <Route path='channel'>
            <Route index path=':channelId' element={<ChannelPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
