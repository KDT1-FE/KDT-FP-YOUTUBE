import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import api from '../api/axios'

export const getSearchVideos = async (search) => {
	const response = await api.get('/search', {
		params: {
			part: 'snippet',
			maxResults: '20',
			q: search,
			type: 'video',
			regionCode: 'kr',
		},
	})
	return response.data.items
}

function Search() {
	const search = new URLSearchParams(useLocation().search).get('q')
	const [searchVideos, setSearchVideos] = useState([])
	useEffect(() => {
		getSearchVideos(search).then((res) => {
			setSearchVideos(res)
		})
	}, [search])
	return (
		<PaddingSection>
			{searchVideos.map((video) => (
				<div className="videoContainer" key={video.id.videoId}>
					<Link className="searchVideoList" to={`/video/${video.id.videoId}`}>
						<img src={video.snippet.thumbnails.medium.url} alt="썸네일" />
						<div className="videoInfo">
							<span className="videoTitle">{video.snippet.title}</span>
							<span className="channelTitle">{video.snippet.channelTitle}</span>
						</div>
					</Link>
				</div>
			))}
		</PaddingSection>
	)
}

export default Search

const PaddingSection = styled.div`
	width: 1200px;
	margin: 0 auto;
	padding-top: 40px;
	.videoContainer {
		margin: 20px 0;
	}
	.searchVideoList {
		display: flex;
		img {
			border-radius: 10px;
		}
		.videoInfo {
			margin-left: 10px;
			.videoTitle {
				margin-bottom: 20px;
				font-size: 1.2rem;
				line-height: 2rem;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				display: -webkit-box;
				overflow: hidden;
			}
			.channelTitle {
				font-size: 0.8rem;
			}
		}
	}
`
