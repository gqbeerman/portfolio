import tilt from 'tilt.js';

const initTilt = () => {
  // Projects images
  $('.project-wrapper__image a div').tilt({
    maxTilt: 10,
    perspective: 1000,
    easing: "cubic-bezier(0.3, 0.98, 0.52, 0.99)",
    scale: 1.1,
    speed: 300,
    transition: true,
    reset: false,
    glare: true,
    maxGlare: .5,
  });
};

export default initTilt;
