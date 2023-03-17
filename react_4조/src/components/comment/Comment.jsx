import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../../context/ApiContext";
import CommentItem from "./CommentItem";
import { BsFilterLeft } from "react-icons/bs";
import styles from "./css/Comment.module.css";
import { useParams } from "react-router-dom";

export default function Comment() {
  const { videoId } = useParams();

  const { youtube } = useYoutubeApi();

  const { data: commentList } = useQuery(["commentList", videoId], () => {
    return youtube.comment(videoId);
  });

  // 댓글 입력창 클릭 여부
  const [isComment, setIsComment] = useState(false);

  return (
    <div className={styles.container}>
      {commentList ? (
        <>
          <div className={styles.commentHeader}>
            <div>댓글 {commentList.length}개</div>
            <button>
              <BsFilterLeft /> 정렬 기준
            </button>
          </div>
          {/* 댓글 input */}
          <div className={styles.commentAdd}>
            {/* 댓글 작성 창 프로필 img */}
            <img src="/images/profileImg.jpg" alt="profile_img" />
            <form className={styles.commentForm}>
              {/* 댓글 input */}
              <input
                className={styles.commentInput}
                type="text"
                placeholder="댓글추가..."
                onFocus={() => setIsComment(true)}
              ></input>
              {/* 댓글 토글 */}
              {isComment ? (
                <div className={styles.commentToggle}>
                  {/* 댓글 취소 Btn */}
                  <button type="reset" className={styles.commentCancle}>
                    취소
                  </button>
                  {/* 댓글 등록 Btn */}
                  <button type="reset" className={styles.commentRegister}>
                    댓글
                  </button>
                </div>
              ) : (
                <></>
              )}
            </form>
          </div>
          {commentList.map((comment) => (
            <div key={comment.id}>
              {/* 댓글 Id */}
              {/* {console.log(comment.topLevelCommentId)} */}
              <CommentItem
                comment={comment.topLevelComment}
                replyCount={comment.totalReplyCount}
              />
            </div>
          ))}
        </>
      ) : (
        <>
          <div className={styles.commentHeader}>
            <div>댓글 0개</div>
            <button>
              <BsFilterLeft />
              정렬 기준
            </button>
          </div>
          <div className={styles.commentAdd}>
            <img src="" alt="profileImg" />
            <form className={styles.commentForm}>
              <input
                type="text"
                className={styles.commentInput}
                placeholder="댓글추가..."
              ></input>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
