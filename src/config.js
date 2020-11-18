export const ANIMATION_AREA_HEIGHT_DESKTOP = 1500; // in px, meant as default
export const ANIMATION_AREA_HEIGHT_MOBILE = 800;

export const ANIMATION_BREAKPOINTS_DESKTOP = {
  image: {
    opacity: [0, 71],
  },
  lightningImage: {
    pathLength: [0, 60], // so far only used by lightning image
  },
  satelliteImage: {
    scale: [20, 71],
    opacity: [20, 71],
  },
  satelliteOrbit: {
    rotate: [0, 100],
    opacity: [80, 99],
  },
  title: {
    opacity: [20, 71],
    scale: [70, 90],
    y: [70, 90],
  },
  mainContent: {
    opacity: [70, 85],
    y: [70, 95],
    scale: [70, 85],
  },
};

export const ANIMATION_BREAKPOINTS_MOBILE = {
  image: {
    y: [0, 50],
    scale: [0, 50],
  },
  title: {
    y: [0, 50],
    scale: [0, 50],
  },
  designAdvertisementHeader: {
    opacity: [40, 50],
    x: 50, // spring
  },
  scrollJumper: {
    opacity: 50, // spring
  },
  mainContent: {
    opacity: [51, 75],
    y: [51, 95],
    scale: [51, 75],
  },
};

// dimensions and offsets of animated image content on mobile
export const MOBILE_INITIAL_CONTENT = {
  Y: 5,
  START: {
    MAX_WIDTH: 1 / 2,
    MAX_HEIGHT: 1 / 3,
  },
  END: {
    MAX_WIDTH: 7 / 10,
    MAX_HEIGHT: 1 / 2,
  },
};

export const CONTACT_FORM_POST_URL =
  'https://hubblr-hodgepodge-vz77j.ondigitalocean.app/website/contact';
