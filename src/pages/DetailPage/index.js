import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DetailPage.css';

const DetailPage = () => {
  let { movieId } = useParams();
  console.log(movieId);
  const iframeProps = {
    id: 'ytplayer',
    type: 'text/html',
    width: '720',
    height: '405',
    src: `https://www.youtube.com/embed/${movieId}`,
    frameborder: '0',
    allowfullscreen: 'allowfullscreen',
  };
  return (
    <div>
      <iframe {...iframeProps}></iframe>
    </div>
  );
};

export default DetailPage;