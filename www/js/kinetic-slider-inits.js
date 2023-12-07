
// images setup
 const images = [
    "images/kinetic-slide01.jpg",
    "images/kinetic-slide02.jpg",
    "images/kinetic-slide03.jpg",
  ];

// content setup
const texts = [
  ["Planta", "Caption intensity during swipping"],
  ["Rockin", "Main slide displacement image"],
  ["Deserty", "Scale intensity during transition"],
]

rgbKineticSlider = new rgbKineticSlider({

  slideImages: images, // array of images > must be 1920 x 1080
  itemsTitles: texts, // array of titles / subtitles

  backgroundDisplacementSprite: 'images/cursor-sprite.jpg', // slide displacement image 
  cursorDisplacementSprite: 'images/displace-circle.png', // cursor displacement image

  cursorImgEffect : true, // enable cursor effect
  cursorTextEffect : false, // enable cursor text effect
  cursorScaleIntensity : 0.65, // cursor effect intensity
  cursorMomentum : 0.14, // lower is slower

  swipe: true, // enable swipe
  swipeDistance : window.innerWidth * 0.4, // swipe distance - ex : 580
  swipeScaleIntensity: 2, // scale intensity during swipping

  slideTransitionDuration : 1, // transition duration
  transitionScaleIntensity : 30, // scale intensity during transition
  transitionScaleAmplitude : 160, // scale amplitude during transition

  nav: true, // enable navigation
  navElement: '.main-nav', // set nav class

  imagesRgbEffect : false, // enable img rgb effect
  imagesRgbIntensity : 0.9, // set img rgb intensity
  navImagesRgbIntensity : 80, // set img rgb intensity for regular nav 

  textsDisplay : false, // show title
  
});

