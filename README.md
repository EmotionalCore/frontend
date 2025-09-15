# Emotional-Core

## 프로젝트

시와 소설, 웹툰을 자유롭게 게시하고 감상하며 소통할 수 있는 웹 플랫폼
<br />
사용자가 직접 창작물을 올리고, 독자들과 교류할 수 있는 웹사이트

## Team Member(FE)

| 박지원(Leader)                             | 김선진                                 | 이현지                                   |
| ------------------------------------------ | -------------------------------------- | ---------------------------------------- |
| [@PJW980921](https://github.com/PJW980921) | [@SJ-1220](https://github.com/SJ-1220) | [@Hyunji0012](https://github.com/za0012) |

백엔드 3명, 프론트엔드 3명, 디자이너 2명으로 구성된 협업 프로젝트입니다.

## 프로젝트 개요

게시판 형식을 활용한 창작물 공유 커뮤니티 사이트 개발

- **이름**: 감성코어(Emotional-Core)
- **형식**: 게시판 기반 창작물 공유 커뮤니티
- **기획/디자인**: Figma
- **배포**: Vercel(총 3차 중 1차 배포 완료 기준 작성)

## 기술 스택

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Spring Boot, JWT 기반 인증, Swagger
- **Deployment**: Vercel (FE)
- **협업 툴**: GitHub, Notion, Figma

## 주요 기능

1. **회원 기능**

- 일반 로그인 / 회원가입 (React Hook Form)
- 소셜 로그인: Google, Kakao, Naver
- JWT 기반 인증 (AccessToken: Body / RefreshToken: Cookie)
- 로컬 스토리지에 AccessToken 토큰 저장
- 마이페이지: 회원 정보 확인

2. **게시판 기능**

- 카테고리별 게시판 제공: 시 / 소설 / 웹툰
- 작품 등록: 제목, 이미지, 카테고리, 장르, 내용
- 장르 분류: 전체, 일상, 에세이, 판타지, 로맨스, 공포, SF, 스포츠, 기타
- 댓글, 좋아요, 북마크 기능

3. **검색 기능**

- 작품/작가 검색
- 검색 결과 페이지 이동

4. **메인 페이지 구성**

- 게시판 이동 탭
- 이달의 인기 작품 (글/시/웹툰 각 3개)
- 이달의 우수 작가 (총 3명, 한줄 소개 및 대표작)
- 인기 Best 작품 TOP 5
- 추천 콘텐츠: 시(3), 소설(3), 웹툰(6)

## 개발 중인 기능

1. **작품 관리**

- 작품 등록
- 작품 수정

2. **마이페이지**

- 회원 정보 수정
- 회원 탈퇴

## 프로젝트 수행 결과(영상, 이미지)

1. **메인 페이지**

https://github.com/user-attachments/assets/971dd633-ccc1-4374-b510-0eeaa811c600

2. **로그인, 회원가입 페이지**

https://github.com/user-attachments/assets/17f96f96-d092-45e3-841f-b30cedbbb96c

