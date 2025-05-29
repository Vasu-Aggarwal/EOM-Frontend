const API = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  },
  USER: {
    PROFILE: '/user/profile',
    BOOKINGS: (userId) => `/user/${userId}/bookings`,
  },
  BANQUET: {
    LIST: '/banquets',
    AVAILABILITY: (date) => `/banquets/availability?date=${date}`,
  },
};

export default API;
