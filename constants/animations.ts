export const SPRING = {
  smooth: {
    stiffness: 120,
    damping: 20,
  },

  gentle: {
    stiffness: 80,
    damping: 18,
  },
};

export const FADE_UP = {
  initial: {
    opacity: 0,
    y: 40,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1],
  },
};