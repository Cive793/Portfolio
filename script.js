const landing = {
  duration: 1000,
  iterations: 1,
  easing: "ease-out",
};

const keayframes = [
  { transform: "translateX(100px)", opacity: 0 },
  { transform: "translateX(0)", opacity: 1 },
];

const photo = document.querySelector(".portrait");
const animation = photo.animate(keayframes, landing);
