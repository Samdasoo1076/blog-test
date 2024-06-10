## 태일윈드

## Tech Stack

| Lang               | Verseion | Logic                  |
| ------------------ | -------- | ---------------------- |
| Next.js            | 14.2.3   | 라우팅, 데이터 페칭    |
| Tailwindcss        | 3.4.3    | Ui                     |
| Mdx                | 2.0.12   | 데이터 저장            |
| TypeScript         | 5.1.3    | 컴포넌트 타입 명시     |
| Content Management | 0.4.6    | SSG 컨텐츠 레이어 관리 |
| yarn               | 1.22.22  |                        |
| npm                | 10.6.0   |                        |
| node               | v20.12.2 |                        |

## 📌 Commit Convention

**이슈번호 [tag] 커밋 내용 요약**

ex. #123 [feat] 로그인 구현

| tag      | description                                                      |
| -------- | ---------------------------------------------------------------- |
| feat     | 새로운 기능 추가                                                 |
| post     | 새 글 추가                                                       |
| fix      | 자잘한 수정                                                      |
| bugfix   | 버그 수정                                                        |
| refactor | 코드 리팩토링 시에만 사용                                        |
| chore    | config 및 라이브러리, 빌드 관련 파일 수정 (프로덕션 코드 수정 x) |
| rename   | 파일명, 변수명 수정                                              |
| docs     | 문서 수정                                                        |
| comment  | 주석 추가 및 수정                                                |
| remove   | 기능 삭제 및 파일 삭제                                           |
| test     | 테스트 코드 작성                                                 |
| hotfix   | hotfix                                                           |

vercel로 배포시
커밋 전 `터미널`에서 `prettier --write .` 명령어 입력해야 소스 코드 정렬됨.
