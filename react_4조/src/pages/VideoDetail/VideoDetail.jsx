import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useYoutubeApi } from '../../context/ApiContext';
import ChannelInfo from '../../components/ChannelInfo/ChannelInfo';
import styles from './VideoDetail.module.css';
import {
  FaThumbsUp,
  FaRegThumbsUp,
  FaThumbsDown,
  FaRegThumbsDown,
} from 'react-icons/fa';
import { BsShare, BsSave } from 'react-icons/bs';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import Comment from '../../components/comment/Comment'
import { DateFormatter } from '../../util/date';

export default function VideoDetail() {
  const [queryResult, setQueryResult] = useState({});

  const [isOver, setIsOver] = useState(false);

  const [isLike, setIsLike] = useState(false);
  const [isHate, setIsHate] = useState(false);

  const {
    state: { video },
  } = useLocation();

  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();

  useEffect(() => {
    getData();
  }, [videoId]);

  const getData = async () => {
    const result = await youtube.searchId(videoId);
    setQueryResult(result);
    result.snippet.description.length > 200
      ? setIsOver(true)
      : setIsOver(false);
  };

  const { contentDetails, snippet, statistics } = queryResult
    ? queryResult
    : '';

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'm';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + 'k';
    } else {
      return num.toString();
    }
  }

  const clickLike = () => {
    if (isHate) {
      setIsHate((prev) => !prev);
      setIsLike((prev) => !prev);
    } else {
      setIsLike((prev) => !prev);
    }
  };

  const clickHate = () => {
    if (isLike) {
      setIsLike((prev) => !prev);
      setIsHate((prev) => !prev);
    } else {
      setIsHate((prev) => !prev);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {contentDetails ? (
          <div className={styles.wrapper}>
            <div className={styles.channelInfo}>
              <article>
                <div className={styles.videoContainer}>
                  <iframe
                    title={snippet.title}
                    width='100%'
                    height='600'
                    alt='youtube#video'
                    src={`https://www.youtube.com/embed/${videoId}`}
                    frameBorder='0'
                    style={{ borderRadius: 8 }}
                  />
                </div>
                <h3>{snippet.title}</h3>
              </article>
              <section className={styles.channelAndLikes}>
                <ChannelInfo playerSnippet={snippet} />
                <ul className={styles.lists}>
                  <li className={styles.list}>
                    <button className={styles.buttons} onClick={clickLike}>
                      {isLike ? (
                        <>
                          <FaThumbsUp />
                          &nbsp; {Number(statistics.likeCount) + 1}
                        </>
                      ) : (
                        <>
                          <FaRegThumbsUp />
                          &nbsp; {statistics.likeCount}
                        </>
                      )}
                    </button>
                    <button className={styles.buttons} onClick={clickHate}>
                      {isHate ? <FaThumbsDown /> : <FaRegThumbsDown />}
                    </button>
                  </li>

                  <li className={styles.list}>
                    <button className={styles.buttons}>
                      <BsShare />
                    </button>
                  </li>
                  <li className={styles.list}>
                    <button className={styles.buttons}>
                      <BsSave />
                    </button>
                  </li>
                </ul>
              </section>

              <section className={styles.description}>
                <div className={styles.firstInfo}>
                  <p className={styles.firstInfoElements}>
                    조회수 : {formatNumber(statistics.viewCount)}
                  </p>
                  <p className={styles.firstInfoElements}>
                    {DateFormatter(snippet.publishedAt, 'ko')}
                  </p>
                </div>
                <p className={styles.tags}>
                  {snippet?.tags?.map((i) => `#${i} `)}
                </p>
                <p>
                  {isOver ? (
                    <>
                      {`${snippet.description.slice(0, 200)} ... `}
                      <button
                        className={styles.overButton}
                        onClick={() => setIsOver((flag) => !flag)}
                      >
                        더보기
                      </button>
                    </>
                  ) : (
                    <>
                      {snippet.description.split('\n').map((i, index) => {
                        return (
                          <span key={index}>
                            {i}
                            <br />
                          </span>
                        );
                      })}

                      <button
                        className={styles.overButton}
                        onClick={() => setIsOver((flag) => !flag)}
                      >
                        &nbsp;간략히
                      </button>
                    </>
                  )}
                </p>
              </section>
            </div>
            <div className={styles.relatedVideos}>
              <RelatedVideos id={video.id} />
            </div>
            <div className={styles.comment}>
              <Comment id={video.id} />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
