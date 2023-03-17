// date 함수 사용
export default function calcDate(current, update) {
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = month * 12;

  // 날짜 차이 (밀리세컨값)
  const diff = current - update;
  if (parseInt(diff / year) > 0) {
    // 년
    return `${parseInt(diff / year)}년 전`;
  } else if (parseInt(diff / month) > 0) {
    // 월
    return `${parseInt(diff / month)}개월 전`;
  } else if (parseInt(diff / day) > 0) {
    // 일
    return `${parseInt(diff / day)}일 전`;
  } else if (parseInt(diff / hour) > 0) {
    // 시간
    return `${parseInt(diff / hour)}시간 전`;
  } else if (parseInt(diff / minute) > 0) {
    // 분
    return `${parseInt(diff / hour)}분 전`;
  }
}
