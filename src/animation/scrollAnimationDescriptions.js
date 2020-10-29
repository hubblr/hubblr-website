const desktopScrollAnimations = {
  animationAreaHeight: 5000, // in px
  fadeInImage: {
    opacity: {
      inputPercentages: [0, 50],
      outputRange: [0, 1],
    },
  },
  sectionHeading: {
    opacity: {
      inputPercentages: [0, 50],
      outputRange: [0, 1],
    },
    scale: {
      inputPercentages: [50, 90],
      outputRange: [1.5, 1],
    },
    top: {
      inputPercentages: [50, 90],
      // output range is calculated by component (from screen center to below header)
    },
  },
  mainContentCard: {
    opacity: {
      inputPercentages: [50, 95],
      outputRange: [0, 1],
    },
  },
};

export {
  // eslint-disable-next-line import/prefer-default-export
  desktopScrollAnimations,
};