import styled from 'styled-components'

export const RelatedVideoWrapper = styled.div`
	width: 420px;
	height: 94px;
	margin-top: 16px;
	a {
		display: flex;
	}
`
export const VideoImg = styled.div`
	margin-right: 8px;
	img {
		height: 94px;
		border-radius: 8px;
	}
`
export const VideoInfo = styled.div`
	max-height: 94px;
	overflow: hidden;

	.videoTitle {
		margin-bottom: 4px;
		font-size: 1rem;
		line-height: 1.4rem;
		font-weight: 500;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		overflow: hidden;
	}
	.channelTitle {
		font-size: 0.8rem;
		color: rgba(0, 0, 0, 0.5);
	}
	.subscribeInfo {
		font-size: 0.8rem;
	}
`
