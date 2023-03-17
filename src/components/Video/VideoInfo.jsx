import { useState } from 'react'
import styled from 'styled-components'

export default function VideoInfo({ props }) {
	const [isShow, setIsShow] = useState(false)
	return (
		<div>
			<VideoInfoContainer
				className={isShow ? 'show' : ''}
				onClick={() => setIsShow(true)}
			>
				<VideoOptionInfo>
					<div>조회수 {props.statistics.viewCount}회</div>
					<div>{props.snippet.publishedAt}</div>
				</VideoOptionInfo>
				<VideoDescription>{props.snippet.description}</VideoDescription>
				<button
					onClick={(e) => {
						e.stopPropagation()
						setIsShow(false)
					}}
				>
					간략히
				</button>
			</VideoInfoContainer>
		</div>
	)
}

const VideoInfoContainer = styled.div`
	height: 104px;
	padding: 12px;
	overflow: hidden;
	box-sizing: border-box;
	border-radius: 12px;
	background-color: #f2f2f2;
	line-height: 20px;

	&:hover {
		background-color: #e5e5e5;
		cursor: pointer;
	}
	&.show {
		height: 100%;
	}
	&.show:hover {
		background-color: #f2f2f2;
		cursor: auto;
	}
	button {
		margin-top: 14px;
		font-size: 14px;
	}
`
const VideoOptionInfo = styled.div`
	display: flex;
	gap: 4px;
	font-size: 14px;
	font-weight: 500;
`
const VideoDescription = styled.p`
	position: relative;
	white-space: break-spaces;
	word-break: break-all;
`
