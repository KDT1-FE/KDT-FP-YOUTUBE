import styled from 'styled-components';
import './Sidebar.css';

const Btn = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: white;
  :hover {
    background-color: #f0f0f0;
  }
  div {
    margin-right: 20px;
  }
  padding: 0 10px;
  width: 168.3px;
  height: 40px;
  margin-left: 20px;
`;

const ModalNavBtn = ({ svgIcon, text }) => {
  return (
    <Btn>
      <div>{svgIcon}</div>
      <h3>{text}</h3>
    </Btn>
  );
};

export default ModalNavBtn;
