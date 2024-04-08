export const fadeInCardVariant = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (id: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * id,
    },
  }),
};

export const fadeInIngredientsVariant = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: (id: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * id,
    },
  }),
};

export const fadeInLeftVariant = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const fadeInRightVariant = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
