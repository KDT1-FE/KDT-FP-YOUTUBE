import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../../context/ApiContext';
import { DateFormatter } from '../../util/date';
import styles from './VideoItem.module.css';

const VideoItem = ({ video, type }) => {
  const naviaate = useNavigate();
  const { keyword } = useParams();

  const { youtube } = useYoutubeApi();
  const { data: channelImgURL } = useQuery(
    ['channelImg', video.snippet.channelId],
    () => youtube.channelImgURL(video.snippet.channelId)
  );

  return (
    <>
      {video.snippet.channelId && channelImgURL && (
        <li
          key={video.id}
          className={
            type === 'main' ? styles.mainContainer : styles.relatedContainer
          }
          onClick={() =>
            naviaate(`/videos/watch/${video.id}`, { state: { video } })
          }
        >
          <div className={styles.thumbnail}>
            <img
              className={type === 'main' ? styles.mainImg : styles.relatedImg}
              src={video.snippet.thumbnails.medium.url}
              alt={video.id}
            />
          </div>
          <div
            className={type === 'main' ? styles.mainInfo : styles.relatedInfo}
          >
            <div className={type === 'related' ? styles.noImg : ''}>
              {channelImgURL ? (
                <div className={styles.channelThumbnail}>
                  <img
                    className={styles.channelImg}
                    src={channelImgURL}
                    alt={channelImgURL}
                  />
                </div>
              ) : (
                <div className={styles.channelThumbnail}>
                  {video.snippet.channelTitle.slice(0, 1).toUpperCase()}
                </div>
              )}
            </div>

            <div>
              <div className={styles.videoTitle}>
                {video.snippet.title.length > 50
                  ? video.snippet.title.slice(0, 50) + '...'
                  : video.snippet.title}
              </div>
              <div className={type === 'related' ? styles.relatedOnly : ''}>
                <div className={styles.channelTitle}>
                  {video.snippet.channelTitle}
                </div>
                <div className={styles.videoEtc}>
                  {type === 'main' && !keyword && (
                    <span>
                      {new Intl.NumberFormat('ko-KR', {
                        notation: 'compact',
                        maximumFractionDigits: 1,
                      }).format(video.statistics.viewCount)}
                    </span>
                  )}
                  <span className={keyword ? '' : styles.dot}></span>
                  <span>{DateFormatter(video.snippet.publishedAt, 'ko')}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
      )}
    </>
  );
};

export default VideoItem;
