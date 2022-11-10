# 원티드 프리온보딩 3-1 1팀

# 팀 소개

| 이름         | github                         |
| ------------ | ------------------------------ |
| 박승민(팀장) | https://github.com/pmb087      |
| 김정현       | https://github.com/task11      |
| 김준호       | https://github.com/kimjuno97   |
| 윤태성       | https://github.com/taesung1993 |
| 임형섭       | https://github.com/4hsnim      |
| 조서연       | https://github.com/sycho09     |

# 기술 스택

<img src="https://img.shields.io/badge/javascript_ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

# 실행 방법

1. 프로젝트 관련 라이브러리를 설치합니다.

```bash
npm install
```

2. 프로젝트를 실행합니다.

```bash
npm start
```

# 아토믹 디자인 패턴 도입

<img src='https://fe-developers.kakaoent.com/static/34afd4d0a47ff85c8f34295c18c2e374/f058b/atomic-design-flow.png' alt='아토믹 디자인' />

# 디렉토리 구조

```
📦 src
┣ 📂 component /- 레이아웃에 구성될 컴포넌트
┃ ┣ 📂 icons
┃ ┣ 📂 atoms
┃ ┣ 📂 molecules
┃ ┣ 📂 organisms
┃ ┗ 📂 templates
┃ ┗ 📂 pages
┃ ┗ 📜 GlobalStyle.ts
┣ 📂 utils /- 로직 분리
┃ ┣ 📂 hooks /- 커스텀 훅 관리
┃ ┣ 📂 server /- axios 커스텀
┃ ┣ 📂 services /- api 서비스
┃ ┣ 📂 store /- redux
┃ ┣ 📂 types /- 공용 타입
┣ 📜 App.tsx
┗ 📜 index.tsx
```

# Commit Convention

### commitlint

- 사용 이유: 팀의 생산성 향상과 커밋 메세지 히스토리의 관리를 위해 통일성이 필요하다고 판단하였기 때문에 사용하였습니다.
- [Commitlint 문서](https://commitlint.js.org/#/)를 참고하여 설정하였습니다.

  <img width="689" alt="2022-10-28_08 33 50" src="https://user-images.githubusercontent.com/56210700/198418936-4d3fc67a-7bf2-40b5-bf80-421d235c4621.png">
