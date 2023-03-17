import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const VideoItem = ({ data }) => {
  const movieId = data.id.videoId;
  console.log(movieId);
  return (
    <Link to={`/${movieId}`} style={{ textDecoration: 'none' }}>
      <VideoContainer>
        <Wrap>
          <ThumbnailImg
            src={data.snippet.thumbnails.high?.url || data.snippet.thumbnails.default?.url}
            alt={data.snippet.title}
          />
        </Wrap>
        <Thumbnail>
          {/* <img/> */}
          <p>{data.snippet.title}</p>
          <p>{data.snippet.publishedAt}</p>
        </Thumbnail>
      </VideoContainer>
    </Link>
  );
};
const ChannelRow = ({ items }) => {
  return (
    <Container>
      {items.map(item => (
        <VideoItem key={item.id.videoId} data={item}></VideoItem>
      ))}
    </Container>
  );
};

export default ChannelRow;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  column-gap: 1rem;
  row-gap: 2.5rem;
  place-items: center;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  color: black;
  .channelName {
    color: blue;
  }
`;
