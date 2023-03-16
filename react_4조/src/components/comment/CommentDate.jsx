import React from 'react';
import { DateFormatter } from '../../util/date';
// import calcDate from "./dateFunction/calcDate";

export default function CommentDate({ publishedAt, updatedAt }) {
  // 현재날짜
  // const currentDate = new Date();
  // 작성 날짜
  const publishedDate = new Date(`${publishedAt}`);
  // 업데이트 날짜
  const updatedDate = new Date(`${updatedAt}`);
  // console.log(currentDate - updatedDate);
  return (
    <div>
      {/* 날짜 ( ex. 00일전 ) */}
      {/* <span>{calcDate(currentDate, updatedDate)}</span> */}
      {/* timeAgo는 몇 주전으로 뜸! 10일전 .. 이런거 x*/}
      <span>{DateFormatter(updatedDate, 'ko')}</span>
      {/* 댓글 수정 여부 표시 */}
      {updatedDate !== publishedDate ? <></> : <span>(수정됨)</span>}
    </div>
  );
}
