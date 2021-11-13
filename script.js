"use strict";

window.addEventListener("DOMContentLoaded", animateLanding);

function animateLanding() {
  const landing = {
    duration: 1000,
    iterations: 1,
    easing: "ease-out",
  };

  const keayframesPhoto = [
    { transform: "translateX(100px)", opacity: 0 },
    { transform: "translateX(0)", opacity: 1 },
  ];

  const photo = document.querySelector(".portrait");

  const animationPhoto = photo.animate(keayframesPhoto, landing);

  const keayframesHeadingName = [
    { transform: "translateX(-100px)", opacity: 0 },
    { transform: "translateX(0)", opacity: 1 },
  ];

  const headingName = document.querySelector(".name");
  const animationHeadingName = headingName.animate(keayframesHeadingName, landing);

  const keayframesHeadingDescription = [
    { transform: "translateX(-100px)", opacity: 0 },
    { transform: "translateX(0)", opacity: 1 },
  ];

  const headingDesc = document.querySelector(".description");

  const animationHeadingDesc = headingDesc.animate(keayframesHeadingDescription, landing);
}
