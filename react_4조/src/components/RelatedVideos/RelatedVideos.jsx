import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../context/ApiContext';
import VideoItem from '../VideoItem/VideoItem';
import styles from './RelatedVideos.module.css';

const RelatedVideos = ({ id }) => {
  const { youtube } = useYoutubeApi();

  const QueryOption = {
    staleTime: 5 * 60 * 1000,
  };

  const { data: relatedVideos } = useQuery(
    ['related', id],
    () => {
      return youtube.relatedVideos(id);
    },
    QueryOption
  );

  return (
    <div>
      {relatedVideos && (
        <div className={styles.relatedContainer}>
          <ul className={styles.relatedLists}>
            {relatedVideos.map((video) => {
              return <VideoItem key={video.id} video={video} type='related' />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RelatedVideos;
