const requests = {
  fetchPopularVideo: '/videos?part=snippet&chart=mostPopular&maxResults=25',
  fetchSearchVideo: search => {
    return `/search?part=snippet&maxResults=10&q=${search}}`;
  },

  fetchDetailVideo: videoId => {
    return `/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`;
  },
  fetchChannelData: channelId => {
    return `channels?part=snippet&part=statistics&part=contentDetails&id=${channelId}`;
  },
  fetchPlayLists: channelId => {
    return `search?part=snippet&maxResults=10&channelId=${channelId}`;
  },
  fetchComments: videoId => {
    return `/commentThreads?part=snippet&videoId=${videoId}`;
  },
  fetchRelatedVideo: videoId => {
    return `/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`;
  },
};

export default requests;
