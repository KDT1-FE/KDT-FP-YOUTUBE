import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getVideoData } from '../api/axios'
import YouTube from 'react-youtube'
import styled from 'styled-components'
import ChannelInfoContainer from '../components/Video/ChannelInfoContainer'
import VideoInfo from '../components/Video/VideoInfo'
import CommentContainer from '../components/Video/CommentContainer'
import RelativedVideos from '../components/RelatedVieos'

function Video() {
	const { id: videoId } = useParams()
	const [videoItemData, setVideoItemData] = useState()

	useEffect(() => {
		const fetchData = async () => {
			setVideoItemData(...(await getVideoData(videoId)))
		}
		fetchData()
	}, [videoId])

	return (
		<Layout>
			<LeftPane>
				<StyledYouTube
					videoId={videoId}
					opts={{
						width: '100%',
						height: '100%',
						playerVars: {
							autoplay: 0,
						},
					}}
				/>
				{!videoItemData ? (
					<h1>Loading...</h1>
				) : (
					<h2>{videoItemData.snippet.title}</h2>
				)}
				<ChannelInfoContainer videoItemData={videoItemData} />
				{!videoItemData ? (
					<h1>Loading...</h1>
				) : (
					<VideoInfo props={videoItemData} />
				)}
				<CommentContainer videoId={videoId} />
			</LeftPane>
			<RightPane>
				<RelativedVideos />
			</RightPane>
		</Layout>
	)
}

const Layout = styled.div`
	display: flex;
`
const LeftPane = styled.div`
	min-width: 427px;
	padding: 24px 24px 0 0;
	margin-left: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	h2 {
		font-size: 20px;
		font-weight: 600;
	}
`
const StyledYouTube = styled(YouTube)`
	iframe {
		padding-bottom: 56.25%;
		box-sizing: content-box;
	}
`
const RightPane = styled.div``

export default Video
