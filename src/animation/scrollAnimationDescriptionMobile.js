const mobileScrollAnimations = {
  animationAreaHeight: 2000, // in px
  transforms: {
    initialContent: {
      top: {
        inputPercentages: [0, 100],
        outputRange: ['50%', '0'],
      },
    },
    sectionHeading: {
      marginTop: {
        inputPercentages: [0, 100],
        // output range is calculated by component
      },
    },
  },
};

export default mobileScrollAnimations;
