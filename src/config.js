const ANIMATION_AREA_HEIGHT_DESKTOP = 2000; // in px, meant as default
const ANIMATION_AREA_HEIGHT_MOBILE = 1000;

const MOBILE_INITIAL_CONTENT = {
  Y: 5,
  START: {
    MAX_WIDTH: 1 / 2,
    MAX_HEIGHT: 1 / 3,
  },
  END: {
    MAX_WIDTH: 9 / 10,
    MAX_HEIGHT: 1 / 2,
  },
};

const CONTACT_FORM_POST_URL = 'https://hubblr-hodgepodge-vz77j.ondigitalocean.app/website/contact';

export {
  ANIMATION_AREA_HEIGHT_DESKTOP,
  ANIMATION_AREA_HEIGHT_MOBILE,
  MOBILE_INITIAL_CONTENT,
  CONTACT_FORM_POST_URL,
};
