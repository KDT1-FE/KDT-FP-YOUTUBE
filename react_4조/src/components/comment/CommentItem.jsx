import React, { useEffect, useState } from "react";
import {
  AiFillLike,
  AiOutlineLike,
  AiFillDislike,
  AiOutlineDislike,
} from "react-icons/ai";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import CommentDate from "./CommentDate";
import styles from "./css/CommentItem.module.css";

export default function CommentItem({ comment, replyCount }) {
  // 좋아요 클릭여부
  const [isLiked, setIsLiked] = useState(false);
  // 싫어요 클릭여부
  const [isDisLiked, setIsDisLiked] = useState(false);
  // console.log(isLiked, isDisLiked);

  // 답글 버튼 클릭여부
  const [isReply, setIsReply] = useState(false);
  // 답글 개수(확인) 버튼 클릭여부
  const [isReplyCount, setIsReplyCount] = useState(false);

  // 댓글 글자 150자보다 넘는지? => 자세히보기 버튼
  const [isLong, setIsLong] = useState(false);

  function checkLong(text) {
    if (text >= 150) {
      setIsLong(true);
    }
  }

  useEffect(() => {
    checkLong(comment.textDisplay.length);
  }, [comment]);

  // 간략히버튼
  const [summary, setSummary] = useState(false);

  // 답글 만들기
  function createReply(replyCount) {
    let arr = [];
    for (let i = 0; i < replyCount; i++) {
      arr.push(<li key={i}>Nickname{i + 1} : Blah Blah Blah ....</li>);
    }
    return arr;
  }

  return (
    <div className={styles.container}>
      <div>
        {/* 프로필img : 클릭 시, 작성자 channel 이동*/}
        <a href={`${comment.authorChannelUrl}`}>
          <img src={comment.authorProfileImageUrl} alt="comment-profile" />
        </a>
      </div>
      <div className={styles.comment}>
        <div className={styles.commentInfo}>
          {/* 작성자 : 클릭 시, 작성자 channel 이동 */}
          <a href={`${comment.authorChannelUrl}`}>
            {comment.authorDisplayName}
          </a>
          {/* 댓글 작성 날짜 */}
          <div>
            <CommentDate
              publishedAt={comment.publishedAt}
              updatedAt={comment.updatedAt}
            />
          </div>
        </div>
        {/* 댓글 내용 : string => html 형식 변환 */}
        {isLong ? (
          <>
            <div
              className={styles.commentContent}
              dangerouslySetInnerHTML={{
                __html: comment.textDisplay.substr(0, 150) + "...",
              }}
            ></div>
            <div
              className={styles.contentBtn}
              onClick={() => {
                setIsLong(false);
                setSummary(true);
              }}
            >
              자세히 보기
            </div>
          </>
        ) : (
          <>
            <div
              className={styles.commentContent}
              dangerouslySetInnerHTML={{
                __html: comment.textDisplay,
              }}
            ></div>
            {summary && (
              <div
                className={styles.contentBtn}
                onClick={() => {
                  setIsLong(true);
                  setSummary(false);
                }}
              >
                간략히
              </div>
            )}
          </>
        )}
        {/* 버튼 */}
        <div className={styles.commentBtnGroup}>
          {/* 좋아요버튼 */}
          <div
            className={styles.commentLike}
            onClick={() => {
              setIsLiked(!isLiked);
              setIsDisLiked(false);
            }}
          >
            {isLiked ? (
              <>
                <button>
                  <AiFillLike />
                </button>
                {/* 좋아요 개수 */}
                <span> {comment.likeCount + 1}</span>
              </>
            ) : (
              <>
                <button>
                  <AiOutlineLike />
                </button>
                {/* 좋아요 개수가 0 이상이면 표기 */}
                {comment.likeCount > 0 ? (
                  <span> {comment.likeCount}</span>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
          {/* 싫어요버튼 */}
          <div
            className={styles.commentDisLike}
            onClick={() => {
              setIsDisLiked(!isDisLiked);
              setIsLiked(false);
            }}
          >
            {isDisLiked ? (
              <button>
                <AiFillDislike />
              </button>
            ) : (
              <button>
                <AiOutlineDislike />
              </button>
            )}
          </div>
          {/* 답글 버튼 */}
          <button
            className={styles.commentReply}
            onClick={() => setIsReply(true)}
          >
            답글
          </button>
        </div>
        {/* 답글 토글  */}
        {isReply && (
          <div className={styles.replyToggle}>
            {/* 프로필 이미지 */}
            <img src="/images/profileImg.jpg" alt="profile" />
            <div className={styles.replyToggleContent}>
              <input type="text" placeholder="답글추가..."></input>
              <div className={styles.replyToggleBtngroup}>
                {/* 취소버튼 */}
                <button
                  className={styles.replyCancle}
                  onClick={() => setIsReply(false)}
                >
                  취소
                </button>
                {/* 답글 등록 버튼 */}
                <button
                  className={styles.replyRegister}
                  onClick={() => setIsReply(false)}
                >
                  답글
                </button>
              </div>
            </div>
          </div>
        )}
        {/* 답글개수가 0개 이상이면 답글 개수 버튼 표시 */}
        {replyCount > 0 && (
          <div className={styles.replyCount}>
            {isReplyCount ? (
              // 답글 개수 버튼 클릭시
              <>
                <button onClick={() => setIsReplyCount(!isReplyCount)}>
                  <VscTriangleUp /> 답글 {replyCount}개
                </button>
                {createReply(replyCount)}
              </>
            ) : (
              <button onClick={() => setIsReplyCount(!isReplyCount)}>
                <VscTriangleDown /> 답글 {replyCount}개
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
