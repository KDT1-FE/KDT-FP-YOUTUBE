// 직접 만든 조회수 Count 함수
export function ViewCount(views) {
  let result = '';
  const koreanunits = ['천', '만', '억'];

  if (views < 1000) {
    result = views + '회';
  } else if (views < 10000) {
    result = Math.floor(views / 1000) + koreanunits[0] + '회';
  } else if (views < 100000000) {
    result = Math.floor(views / 10000) + koreanunits[1] + '회';
  } else if (views < 1000000000000) {
    result = Math.floor(views / 100000000) + koreanunits[2] + '회';
  } else {
    result = '1조회 이상';
  }

  return result;
}
