const mobileScrollAnimations = {
  animationAreaHeight: 1000, // in px
  transforms: {
    initialContent: {
      y: {
        inputPercentages: [0, 50],
        // output range is calculated by component
      },
    },
    fadeInImage: {
      scale: {
        inputPercentages: [0, 50],
        outputRange: [2.5, 1],
      },
    },
    sectionHeading: {
      marginTop: {
        inputPercentages: [0, 50],
        // output range is calculated by component
      },
      y: {
        inputPercentages: [0, 50],
        // output range is calculated by component
      },
      scale: {
        inputPercentages: [0, 50],
        outputRange: [1.5, 1],
      },
    },
    mainContentCard: {
      opacity: {
        inputPercentages: [51, 95],
        outputRange: [0, 1],
      },
      y: {
        inputPercentages: [51, 95],
        // output range is calculated by component
      },
    },
  },
};

export default mobileScrollAnimations;
