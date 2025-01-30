const memberBaseUrl = '/api/member/';
const worksBaseUrl = '/api/work/';

//유저 API
export const signAddress = {
  signIn: `${memberBaseUrl}signin`,
  signUp: `${memberBaseUrl}signup`,
  findPassword: `${memberBaseUrl}findpassword`,
  userName: `${memberBaseUrl}check/username`,
  token: `${memberBaseUrl}token/refresh`,
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
    default: (keyword: string) => `${worksBaseUrl}search=${keyword}`,
    popular: `${worksBaseUrl}popular`,
  },

  recommend: {
    webtoon: `${worksBaseUrl}recommend/webtoon`,
    poem: `${worksBaseUrl}recommend/poem`,
    novel: `${worksBaseUrl}recommend/novel`,
  },

  new: {
    default: `${worksBaseUrl}new`,
    author: `${worksBaseUrl}/new/author`,
  },
  all: `${worksBaseUrl}all`,
  best: `${worksBaseUrl}best/today`,
  authorBest: `${worksBaseUrl}author/best/monthly`,
  popular: `${worksBaseUrl}popular/monthly`,
  type: `${worksBaseUrl}type`,
  tag: `${worksBaseUrl}tag`,
};
