import React, { useEffect, useState } from 'react';
import { useYoutubeApi} from '../../context/ApiContext';
import styles from './ChannelInfo.module.css';

const ChannelInfo = ({ playerSnippet }) => {
  const { youtube } = useYoutubeApi();
  const [queryResult, setQueryResult] = useState({});

  useEffect(() => {
    youtube
      .searchChannel(playerSnippet.channelId)
      .then((res) => setQueryResult(res));
  }, [playerSnippet, youtube]);

  const { snippet, statistics } = queryResult ? queryResult : '';

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'm';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + 'k';
    } else {
      return num.toString();
    }
  }
  return (
    <>
      {snippet ? (
        <div className={styles.wrapper}>
          <img
            alt='thumbnails'
            src={snippet.thumbnails.default.url}
            style={{
              borderRadius: '50%',
              width: 60,
              height: 60,
              marginRight: 15,
            }}
          />
          <div className={styles.info}>
            <div>
              <strong>{playerSnippet.channelTitle}</strong>
            </div>
            <div>구독자 {formatNumber(statistics.subscriberCount)}</div>
          </div>

          <button className={styles.subscribe}>구독</button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default ChannelInfo;
