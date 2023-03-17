import React from 'react';
import './Recommend.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const VideoItem = ({ data }) => {
  const movieId = data.id.videoId;

  return (
    <Link to={`/${movieId}`} style={{ textDecoration: 'none' }}>
      <VideoContainer>
        <Wrap>
          <ThumbnailImg
            src={data.snippet.thumbnails.maxres?.url || data.snippet.thumbnails.default?.url}
            alt={data.snippet.title}
          />
        </Wrap>
        <Thumbnail>
          {/* <img/> */}
          <p>{data.snippet.title}</p>
          <Link to={`/channel/${data.snippet.channelId}`} style={{ textDecoration: 'none' }}>
            <p className='channelName'>{data.snippet.channelTitle}</p>
          </Link>
          <p>{data.snippet.publishedAt}</p>
        </Thumbnail>
      </VideoContainer>
    </Link>
  );
};
const Recommend = ({ data }) => {
  // const navigate = useNavigate()

  return (
    <Container>
      {data.map(item => (
        <VideoItem key={item.id.videoId} data={item}></VideoItem>
      ))}
    </Container>
  );
};

export default Recommend;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const VideoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 15rem;
  height: 18rem;
`;
const Wrap = styled.div`
  width: 100%;
`;
const ThumbnailImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 90%;
  border-radius: 5px;
  transition: all ease-in 200ms;
  :hover {
    border-radius: 15px;
    transform: scale(1.1);
    cursor: pointer;
  }
`;
const Thumbnail = styled.div`
  box-sizing: border-box;
  font-size: 0.7rem;
  color: white;
  .channelName {
    color: lightblue;
  }
`;
