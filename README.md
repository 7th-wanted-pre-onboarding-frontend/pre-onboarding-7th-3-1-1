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
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">

# 실행 방법

1. 프로젝트 관련 라이브러리를 설치합니다.

```bash
npm install
```

2. 프로젝트를 실행합니다.

```bash
npm start
```

3. `API` Repo를 클론받습니다.

```bash
git clone https://github.com/walking-sunset/assignment-api_7th.git
```

4. 같은 방식으로 `API` 프로젝트 관련 라이브러리를 설치합니다.

```bash
npm install
```

5. `API` 프로젝트를 실행합니다.

```bash
npm run api   //실행 시 localhost:4000 에 API 서버 실행
```

6. 이제 해당 레포지토리의 통신 기능이 사용 가능합니다.

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

# Best Practice

---

- **API 호출 별 로컬 캐싱 구현**
    - `Best Practice` **[Discussion](https://github.com/7th-wanted-pre-onboarding-frontend/.github/discussions/22)**
    - **[회의록](https://github.com/orgs/7th-wanted-pre-onboarding-frontend/discussions/20)** 에서 논의한 방법대로 API 호출 후 받은 데이터를 key-value 형태의 변수를 생성해서 localStorage 와 redux 를 사용해 저장하여 로컬 캐싱을 구현합니다.
    
    ![Disscussion1](https://user-images.githubusercontent.com/58736618/200612069-2c771764-1072-45d6-bd5f-aab039ae9b02.png)

    ![Disscussion2](https://user-images.githubusercontent.com/58736618/200612153-bc715aea-4a04-4071-9423-bc223b70c802.png)

    ![Disscussion3](https://user-images.githubusercontent.com/58736618/200612214-45bb179d-376e-40f4-ac26-6ad5c7328c91.png)
    
    
    - redux-thunk 사용해 비동기 처리를 하고, 서버에서 받은 데이터를 전달받은 시간과 함께 반환합니다.

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/utils/store/sick.ts#L11-L18

    - 응답 받은 데이터는 Cache 형태로 리덕스 store와 로컬 스토리지에 저장합니다.

https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/utils/store/sick.ts#L22-L50

    - 만들어둔 타입을 이용합니다.
    
https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/utils/types/Cache.ts#L1-L10

    - 유효시간을 확인 후 만료되었을 경우 재요청합니다.
    
https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/utils/services/sick.service.ts#L5-L20
https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/utils/hooks/useFetchSick.tsx#L22-L34

---

- **입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행**
    - `Debounce` 는 지연 작업 처리를 효율적으로 구현하는 방법으로 특정 시간 동안 대기하다 마지막에 입력된 내용을 바탕으로 서버 요청을 실행합니다.
        - 입력 값이 변경되면 `Debounce` 함수가 실행됩니다.
        - debounce 함수가 실행되면 `setTimeout()`함수의 실행 대기 함수로 API 호출 함수를 전달합니다.
        - 지연 대기 시간(500ms) 내에 입력 값 변경이 없으면 API 호출을 실행하고, 변경이 있으면 `clearTimeout` 함수로 실행대기 중인 API 호출 함수의 작업을 취소해 함수의 요청 횟수를 500ms 마다 한 번으로 제한합니다.
        
        https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/utils/hooks/useFetchSick.tsx#L35-L41
    - API를 호출할 때 마다 `console.info("calling api")` 출력을 통해 콘솔창에서 API 호출 횟수 확인이 가능하도록 설정
    https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/utils/store/sick.ts#L36-L50
    
---

- **키보드만으로 추천 검색어들로 이동 가능하도록 구현**
    - 검색창에 검색어를 입력합니다.
    - 입력한 검색어를 포함하는 추천 검색어 리스트를 확인합니다.
    - 키보드 위/아래 방향 키로 검색어를 탐색합니다.
    - 마지막 검색어까지 탐색했으면 다시 처음 검색어로 이동합니다.
    - Enter 키를 누르면 해당 검색어가 입력창에 표시됩니다.
    https://github.com/7th-wanted-pre-onboarding-frontend/pre-onboarding-7th-3-1-1/blob/4d9c2e17ccdcfb572bbeca923f74a46ec8291a88/src/components/organisms/Form.tsx#L54-L123
