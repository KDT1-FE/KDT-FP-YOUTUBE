import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getChannelData } from '../../api/axios'

export default function ChannelInfoContainer({ videoItemData }) {
	const [channelItemData, setChannelItemData] = useState()

	useEffect(() => {
		const fetchData = async () => {
			if (videoItemData) {
				const channelId = videoItemData?.snippet?.channelId
				setChannelItemData(...(await getChannelData(channelId)))
			}
		}
		fetchData()
	}, [videoItemData])

	return (
		<Container>
			{!channelItemData ? (
				<h1>Loading...</h1>
			) : (
				<ChannelInfo>
					<img
						src={channelItemData.snippet.thumbnails.default.url}
						alt="thumbnail"
					/>
					<ChannelInfoText>
						<div className="title">{channelItemData.snippet.title}</div>
						<div className="subscriberCount">
							구독자 {channelItemData.statistics.subscriberCount}명
						</div>
					</ChannelInfoText>
					<button>구독</button>
				</ChannelInfo>
			)}
			<OptionBtnContainer>
				<button>좋아요 버튼</button>
				<button>공유</button>
				<button>오프라인 저장</button>
				<button>...</button>
			</OptionBtnContainer>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 4px;
	button {
		border: 0;
		padding: 0 16px;
		height: 36px;
		font-size: 14px;
		line-height: 36px;
		border-radius: 18px;
		background-color: #f2f2f2;
	}
`
const ChannelInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	img {
		width: 40px;
		heigh: 40px;
		border-radius: 50%;
	}
`
const ChannelInfoText = styled.div`
	margin-right: 24px;
	display: flex;
	flex-direction: column;
	gap: 4px;
	.subscriberCount {
		font-size: 12px;
		color: #606060;
	}
`
const OptionBtnContainer = styled.div`
	display: flex;
	gap: 4px;
`
