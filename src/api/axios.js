import axios from 'axios'

const api = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		key: import.meta.env.VITE_YOUTUBE_API_KEY,
	},
})

export default api

export const getVideoData = async (videoId) => {
	try {
		const { data } = await api.get(
			`/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`
		)
		localStorage.setItem('currentVideo', JSON.stringify(data.items))
		return data.items
	} catch (error) {
		console.error(error)
	}
}

export const getChannelData = async (channelId) => {
	try {
		const { data } = await api.get(
			`/channels?part=snippet&part=statistics&part=contentDetails&id=${channelId}`
		)
		localStorage.setItem('currentChannel', JSON.stringify(data.items))
		return data.items
	} catch (error) {
		console.error(error)
	}
}

export const getCommentData = async (videoId) => {
	try {
		const { data } = await api.get(
			`/commentThreads?part=snippet&videoId=${videoId}`
		)
		localStorage.setItem('currentComment', JSON.stringify(data.items))
		return data.items
	} catch (error) {
		console.error(error)
	}
}

export const getRelativedVideos = async (videoId) => {
	const response = await api.get('/search', {
		params: {
			part: 'snippet',
			maxResults: '20',
			relatedToVideoId: videoId,
			type: 'video',
			regionCode: 'kr',
		},
	})
	return response.data.items
}
