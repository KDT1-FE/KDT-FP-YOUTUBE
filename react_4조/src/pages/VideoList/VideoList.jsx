import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import VideoItem from '../../components/VideoItem/VideoItem'
import { useYoutubeApi } from "../../context/ApiContext";
import styles from "./VideoList.module.css";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const QueryOption = {
    staleTime: 5 * 60 * 1000,
  };

  const { data: videos } = useQuery(
    ["videos", keyword],
    () => {
      return youtube.search(keyword);
    },
    QueryOption
  );

  console.log(videos);
  return (
    <div>
      {videos && (
        <div className={styles.videoContainer}>
          <ul className={styles.videoLists}>
            {videos.map((video) => {
              return <VideoItem key={video.id} video={video} type="main" />;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
