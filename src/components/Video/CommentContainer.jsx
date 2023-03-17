import styled from 'styled-components'
import { RiThumbUpLine, RiThumbDownLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'
import { getCommentData } from '../../api/axios'

export default function CommentContainer({ videoId }) {
	const [commentListData, setCommentListData] = useState()
	useEffect(() => {
		const fetchData = async () => {
			setCommentListData(await getCommentData(videoId))
		}
		fetchData()
	}, [videoId])
	return (
		<Container>
			{!commentListData ? (
				<h1>Loading...</h1>
			) : (
				commentListData.map((i, index) => {
					const {
						authorProfileImageUrl,
						authorChannelUrl,
						authorDisplayName,
						likeCount,
						publishedAt,
						textOriginal,
					} = i.snippet.topLevelComment.snippet
					return (
						<CommentItem key={index}>
							<ImageContainer>
								<a href={authorChannelUrl}>
									<img src={authorProfileImageUrl} alt="profile" />
								</a>
							</ImageContainer>
							<TextConainer>
								<NameInfo>
									<span>{authorDisplayName}</span>
									<span>{publishedAt}</span>
								</NameInfo>
								<p>{textOriginal}</p>
								<ButtonContainer>
									<button>
										<RiThumbUpLine />
									</button>
									<span>{likeCount}</span>
									<button>
										<RiThumbDownLine />
									</button>
								</ButtonContainer>
							</TextConainer>
						</CommentItem>
					)
				})
			)}
		</Container>
	)
}

const Container = styled.ul`
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
`
const CommentItem = styled.li`
	display: flex;
	gap: 12px;
	align-items: flex-start;
`
const ImageContainer = styled.div`
	img {
		width: 40px;
		heigh: 40px;
		border-radius: 50%;
	}
`
const TextConainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	font-size: 14px;
	p {
		line-height: 18px;
	}
`
const NameInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
	span:first-child {
		font-weight: 600;
	}
	span:last-child {
		font-size: 12px;
		color: #606060;
	}
`
const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
	color: #606060;
	button {
		height: 36px;
		line-height: 20px;
		border-radius: 50%;
		font-size: 20px;
		background-color: transparent;
	}
	button:hover {
		background-color: rgb(242, 242, 242);
	}
	span {
		font-size: 12px;
	}
`
