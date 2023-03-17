# 프로젝트 제목

YouTube

## 프로젝트 소개

Google에서 제공하는 YouTube API를 이용하여 데이터를 받아와 YouTube 앱을 만든다.

## 팀원 소개

[김응열](https://github.com/Valentin1495) | [장건우](https://github.com/jangco97) | [이현정](https://github.com/dochi-dev-tech) | [최우성](https://github.com/No-answerday)

## 기술 스택

- antd
- axios
- moment
- react
- react-router-dom
- styled-components

### 과제 진행 기간

2023.3.10 ~ 2023.3.16

### 작업 영역 및 구현 기능 설명

- 김응열

  - 홈페이지 header와 sidebar, sidebar modal 구현
  - 홈페이지 비디오 카드 스타일링

- 장건우

  - Mainpage, Channelpage, MainComponent 구현
  - 홈페이지 비디오 이미지, 비디오 타이틀, 채널 이름, 날짜 등의 데이터를 렌더링
  - ChannelPage는 메인페이지의 채널이름을 누르면 이동하도록 구현하였고 useEffect로 해당 channelId를 활용하여(useParams로 가져옴) axios로 api 호출을 하여 채널 관련 비디오가 10개 받아지도록 구현

- 최우성
  - SearchPage, SearchMain 구현
  - useState와 useEffect를 사용하여 검색어를 저장. 검색어는 useParams를 사용하여 URL에서 가져오고, 그 결과를 SearchMain 컴포넌트에 전달하여 화면에 출력하는 것을 구현

### 어려웠던 점

- styled-components를 활용할 때 props 이용하여 modal을 열고 닫는 것과 반응형 구현하는 부분이 힘들었습니다.

- Youtube api 호출에 제한이 있어서 그 부분을 해결하기 위해 localstorage로 대처하는 부분이 까다롭게 느껴졌습니다. 또한 async await 비동기 처리하는 부분이 조금 까다로웠습니다.

- api를 호출하면서 여러가지 오류들이 났었고 이를 해결하는 것이 어려웠습니다.
  또 api의 불필요한 호출을 최소화하는 것이나 내가 원하는 검색어만 가져오게 하는 것이 생각보다 까다로웠습니다. useState 나 useEffect 같은 Hook을 적재적소에 잘 사용하는 것이 어려웠습니다.
