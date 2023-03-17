import { useState, useEffect } from 'react'
import { getRelativedVideos } from '../../api/axios'
import { Link, useParams } from 'react-router-dom'
import { RelatedVideoWrapper, VideoImg, VideoInfo } from './style'

const RelativedVideos = () => {
	const [videos, setVideos] = useState([])
	const { id: videoId } = useParams()
	useEffect(() => {
		getRelativedVideos(videoId).then((res) => {
			setVideos(res)
		})
	}, [videoId])
	return (
		<>
			{videos.map((video) => (
				<RelatedVideoWrapper key={video.id.videoId}>
					<Link to={`/video/${video.id.videoId}`}>
						<VideoImg>
							<img src={video.snippet.thumbnails.medium.url} alt="썸네일" />
						</VideoImg>
						<VideoInfo>
							<div>
								<p className="videoTitle">{video.snippet.title}</p>
							</div>
							<p className="channelTitle">{video.snippet.channelTitle}</p>
						</VideoInfo>
					</Link>
				</RelatedVideoWrapper>
			))}
		</>
	)
}

export default RelativedVideos
