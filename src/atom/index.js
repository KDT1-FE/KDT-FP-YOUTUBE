import { atom, selectorFamily } from 'recoil'
import api from '../api/axios'

export const commentListState = atom({
	key: 'commentListState',
	default: [],
})

export const videoQuery = selectorFamily({
	key: 'videoQuery',
	get: (videoId) => async () => {
		try {
			const { data } = await api.get(
				`/videos?part=snippet&part=contentDetails&part=player&part=statistics&id=${videoId}`
			)
			return data.items
		} catch (error) {
			console.error(error)
		}
	},
})
export const channelQuery = selectorFamily({
	key: 'channelQuery',
	get: (channelId) => async () => {
		try {
			const { data } = await api.get(
				`/channels?part=snippet&part=statistics&part=contentDetails&id=${channelId}`
			)
			localStorage.setItem('currentChannel', JSON.stringify(data.items))
			return data.items
		} catch (error) {
			console.error(error)
		}
	},
})
export const commentQuery = selectorFamily({
	key: 'commentQuery',
	get: (videoId) => async () => {
		try {
			const { data } = await api.get(
				`/commentThreads?part=snippet&videoId=${videoId}`
			)
			const filteredData = []
			await data.items.map((i) => {
				filteredData.push([...i.snippet.topLevelComment.snippet])
			})
			localStorage.setItem('currentComment', JSON.stringify(filteredData))
			return filteredData
		} catch (error) {
			console.error(error)
		}
	},
})
export const relatedToVideoQuery = selectorFamily({
	key: 'relatedToVideoQuery',
	get: (videoId) => async () => {
		try {
			const { data } = await api.get(
				`/search?part=snippet&maxResults=10&relatedToVideoId=${videoId}&type=video`
			)
			window.localStorage.setItem('relatedToVideo', JSON.stringify(data.items))
			return data.items
		} catch (error) {
			console.error(error)
		}
	},
})

export const navToggleState = atom({
	key: 'navToggleState',
	default: true,
})
