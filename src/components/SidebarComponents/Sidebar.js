import HistoryIcon from '././SidebarIcons/HistoryIcon';
import HomeIcon from '././SidebarIcons/HomeIcon';
import LibraryIcon from '././SidebarIcons/LibraryIcon';
import NavBtn from './NavBtn';
import ShortsIcon from '././SidebarIcons/ShortsIcon';
import './Sidebar.css';
import styled from 'styled-components';
import SubscriptionsIcon from '././SidebarIcons/SubscriptionsIcon';

const Container = styled.div`
  height: 100vh;
  background-color: white;
  @media screen and (max-width: 768px) {
    display: none;
  }
  position: fixed;
  top: 75px;
`;

const Sidebar = () => {
  return (
    <Container>
      <NavBtn svgIcon={<HomeIcon />} text={'Home'} />
      <NavBtn svgIcon={<ShortsIcon />} text={'Shorts'} />
      <NavBtn svgIcon={<SubscriptionsIcon />} text={'Subscriptions'} />
      <NavBtn svgIcon={<LibraryIcon />} text={'Library'} />
      <NavBtn svgIcon={<HistoryIcon />} text={'History'} />
    </Container>
  );
};

export default Sidebar;
