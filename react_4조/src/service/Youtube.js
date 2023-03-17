import axios from 'axios';

export default class Youtube {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword) {
    console.log(`${keyword ? 'search fetching' : 'mostPopular fetching'}`);
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async searchId(videoId) {
    return this.#searchVideoId(videoId);
  }

  async searchChannel(channelId) {
    return this.#searchChannelInfo(channelId);
  }

  async #searchByKeyword(keyword) {
    console.log('search facthing');
    return this.instance
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.filter((item) => item.id.kind !== 'youtube#channel')
      )
      .then((items) =>
        items.map((item) => ({
          ...item,
          id: item.id.videoId,
        }))
      );
  }

  async #mostPopular() {
    return this.instance
      .get('videos', {
        params: {
          part: 'snippet,statistics',
          maxResults: 5,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.filter((item) => item.id.kind !== 'youtube#channel')
      );
  }

  async comment(videoId) {
    return this.instance
      .get('commentThreads', {
        params: {
          part: 'snippet',
          videoId: videoId,
          maxResults: 5,
        },
      })
      .then((res) => res.data.items)
      .then((items) =>
        items.map((item) => {
          return {
            ...item,
            // topLevelCommentId: item.snippet.topLevelComment.id,
            topLevelComment: item.snippet.topLevelComment.snippet,
            totalReplyCount: item.snippet.totalReplyCount,
          };
        })
      );
  }
  async relatedVideos(id) {
    return this.instance
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          relatedToVideoId: id,
        },
      })

      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) =>
        items.filter((item) => item.id.kind !== 'youtube#channel')
      );
  }

  async channelImgURL(id) {
    return this.instance
      .get('channels', {
        params: {
          part: 'snippet',
          id,
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async #searchVideoId(videoId) {
    return this.instance
      .get(`videos`, {
        params: {
          part: 'snippet,contentDetails,player,statistics',
          id: videoId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  async #searchChannelInfo(channelId) {
    return this.instance
      .get('channels', {
        params: {
          part: 'snippet,statistics,contentDetails',
          id: channelId,
        },
      })
      .then((res) => res.data.items[0]);
  }
}
