"use strict";

//gsap.registerPugin(ScrollTrigger);
window.addEventListener("DOMContentLoaded", animateLanding);
const projects = gsap.utils.toArray(".projectContainer");

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

  animateProjects();
}

function animateProjects() {
  projects.forEach((project) => {
    gsap.to(project, {
      scrollTrigger: {
        trigger: project,
        start: "top 90%",
      },
      y: -100,
      opacity: 1,
      duration: 1,
    });
  });
}
