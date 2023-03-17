import axios from 'axios';

export default class Youtube {
  // constructor(){}

  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) =>
        items.filter((item) => item.id.kind !== 'youtube#channel')
      );
  }

  async #mostPopular() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }

  async comments() {
    return axios.get(`/videos/comment.json`).then((res) => res.data.items);
  }

  async relatedVideos() {
    return axios
      .get(`/videos/related.json`)
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async channelImgURL(id) {
    return axios
      .get(`/videos/channel.json`)
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }
}
