import React, { useEffect, useState, useMemo } from 'react';
import Row from '../../components/MainComponents/Row';
import axios from '../../api/axios';
import requests from '../../api/requests';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-left: 80px;
  margin-top: 75px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const MainPage = () => {
  const [youtubeData, setYoutubeData] = useState([]);

  const items = useMemo(() => JSON.parse(localStorage.getItem('PopularVideo')), []);

  const fetchData = async () => {
    await axios(requests.fetchPopularVideo).then(res => {
      const data = res.data.items;
      console.log(data);
      setYoutubeData(data);
      localStorage.setItem('PopularVideo', JSON.stringify(data));
    });
  };

  useEffect(() => {
    if (items) {
      setYoutubeData(items);
      return;
    } else {
      fetchData();
    }
  }, [items]);

  return (
    <MainContainer>
      <Row items={youtubeData} />
    </MainContainer>
  );
};

export default MainPage;
