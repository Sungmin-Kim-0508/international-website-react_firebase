// Global routes
const SIGN_IN = "/signIn";
const SIGN_UP = "/signUp";

// ADMIN routes
const ADMIN_HOME = "/";
const ADMIN_HOME_UPDATE_PARAGRAPH = "/admin_updateHome";
const ADMIN_ABOUT = "/admin_about";
const ADMIN_FOR_STUDENTS = "/admin_forStudents";
const ADMIN_FOR_VOLUNTEERS = "/admin_forVolunteers";
const ADMIN_CONTACT = "/admin_contact";
const ADMIN_NEWS_DETAILS = "/admin_newsDetails/:id";
const ADMIN_NEWS = "/admin_news";
const ADMIN_CREATE_NEWS = "/admin_createNews";

// User routes
const ABOUT = "/about";
const FOR_STUDENTS = "/forStudents";
const FOR_VOLUNTEERS = "/forVolunteers";
const CONTACT = "/contact";
const NEWS_DETAILS = "/newsDetails/:id";
const NEWS = "/news";

export const global_routes = {
  signIn: SIGN_IN,
  signUp: SIGN_UP
};

export const admin_routes = {
  home: ADMIN_HOME,
  about: ADMIN_ABOUT,
  homeUpdateParagraph: ADMIN_HOME_UPDATE_PARAGRAPH,
  forStudents: ADMIN_FOR_STUDENTS,
  forVolunteers: ADMIN_FOR_VOLUNTEERS,
  contact: ADMIN_CONTACT,
  news: ADMIN_NEWS,
  newsDetails: ADMIN_NEWS_DETAILS,
  createNews: ADMIN_CREATE_NEWS
};

export const user_routes = {
  about: ABOUT,
  forStudents: FOR_STUDENTS,
  forVolunteers: FOR_VOLUNTEERS,
  contact: CONTACT,
  news: NEWS,
  newsDetails: NEWS_DETAILS
};
