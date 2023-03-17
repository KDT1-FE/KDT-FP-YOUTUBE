import axios from '../../api/axios';
import requests from '../../api/requests';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChannelRow from '../../components/MainComponents/ChannelRow';
import styled from 'styled-components';
const ChannelPage = () => {
  let { channelId } = useParams();
  console.log(channelId);
  const [channelVideo, setChannelVideo] = useState([]);
  const [channelData, setChannelData] = useState([]);
  async function getChannelData() {
    try {
      const response = await axios(requests.fetchChannelData(channelId));
      const cdata = response.data.items;
      setChannelData(cdata);
      const response2 = await axios(requests.fetchPlayLists(channelId));
      const vdata = response2.data.items;
      setChannelVideo(vdata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getChannelData();
  }, []);
  return (
    <Container>
      <ChannelBanner>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7qds4EAA4g7lulTnzXifOJLHrNi1uGDWaQ&usqp=CAU'
          alt='youtube banner'
        />
      </ChannelBanner>
      <ChannelInfo>
        <img
          style={{ width: '3rem', height: '3rem', borderRadius: '50%' }}
          src={channelData[0]?.snippet.thumbnails.high.url}
          alt='thumbnail'
        />
        <p>{channelData[0]?.snippet.title}</p>
        <p>
          구독자:{' '}
          {parseInt(channelData[0]?.statistics.subscriberCount) > 10000
            ? `${Math.floor(parseInt(channelData[0]?.statistics.subscriberCount) / 10000)}만명`
            : `${Math.floor(parseInt(channelData[0]?.statistics.subscriberCount) / 1000)}천명`}
        </p>
      </ChannelInfo>
      <ChannelRow items={channelVideo} />
    </Container>
  );
};

export default ChannelPage;
const Container = styled.div`
  margin-left: 80px;
  margin-top: 75px;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
const ChannelBanner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding: 20px 0;
  background: rgb(2, 0, 36);
  img {
    border-radius: 10px;
    object-fit: cover;
    opacity: 0.8;
  }
  img:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;
const ChannelInfo = styled.div`
  margin-left: 3rem;
`;
