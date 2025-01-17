const memberBaseUrl = '/api/member/';
const worksBaseUrl = '/api/work/';

//유저 API
export const signAddress = {
  signIn: `${memberBaseUrl}signin`,
  signUp: `${memberBaseUrl}signup`,
};

//소셜 로그인 API
export const oauthAddress = {
  naver: '/signin/naver',
  google: '/login/oauth2/code/{registrationId}',
  kakako: '/auth/oauth2/kakao',
};

//작품 API
export const worksAddress = {
  search: {
    default: `${worksBaseUrl}search`,
    popular: `${worksBaseUrl}popular`,
  },

  recommend: {
    webtoon: `${worksBaseUrl}webtoon`,
    poem: `${worksBaseUrl}poem`,
    novel: `${worksBaseUrl}novel`,
  },

  new: {
    default: `${worksBaseUrl}new`,
    author: `${worksBaseUrl}author`,
  },
  all: `${worksBaseUrl}all`,
  best: `${worksBaseUrl}best/today`,
  authorBest: `${worksBaseUrl}author/best/monthly`,
  popular: `${worksBaseUrl}popular/monthly`,
  type: `${worksBaseUrl}type`,
  tag: `${worksBaseUrl}tag`,
};
