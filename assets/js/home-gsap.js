/*************** Custom GSAP Animation for Header Image and Logo ****************/
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const video = document.getElementById("homeVideo");

      if (video) {
        const source = document.createElement("source");
        source.src = "https://themarketingsocials.com/wp-content/themes/themarketingsocials/assets/images/home-page/tms-showreel.mp4";
        source.type = "video/mp4";

        video.appendChild(source);
        video.load(); // Force reload
      } else {
        console.warn("Video element with ID 'homeVideo' not found.");
      }
    }, 500); // Delay in milliseconds (2000ms = 2 seconds)
  });

// // Optimized infinite rotation for header image
gsap.set(".header-image", {
    transformOrigin: "50% 50%",
    willChange: "transform"
});

gsap.to(".header-image", {
    rotation: 360,
    duration: 10,
    repeat: -1,
    ease: "none",
    force3D: true // Forces GPU usage
});

/*************** Custom GSAP Animation for Header Image and Logo ****************/
gsap.registerPlugin(ScrollTrigger);
/*******************  Gsap Marquee Animation(Home)- 1 ****************/
 function initHomeMarquee(container, textEl) {
  if (!container || !textEl) return;

  // Remove all clones except the first
  while (container.children.length > 1) {
    container.removeChild(container.lastChild);
  }
  textEl.style.whiteSpace = 'nowrap';

  // Calculate widths
  const textWidth = textEl.offsetWidth;
  const containerWidth = container.parentElement.offsetWidth;
  let total = textWidth;

  // Append clones until covering container + 2x textWidth
  while (total < containerWidth + textWidth * 2) {
    const clone = textEl.cloneNode(true);
    clone.style.whiteSpace = 'nowrap';
    container.appendChild(clone);
    total += clone.offsetWidth;
  }

  // Kill existing tween
  if (container._marqueeTween) {
    container._marqueeTween.kill();
    container._marqueeTween = null;
  }

  gsap.set(container, { x: 0, force3D: true });

  // Create marquee animation, paused initially
  container._marqueeTween = gsap.to(container, {
    x: `-=${textWidth}`,
    duration: 18,
    ease: "linear",
    repeat: -1,
    force3D: true,
    overwrite: true, 
    modifiers: {
      x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
    }
  });

  // ScrollTrigger to play/pause animation based on visibility
//   ScrollTrigger.create({
//     trigger: container,
//     start: "top bottom",
//     end: "bottom top",
//     onEnter: () => container._marqueeTween?.play(),
//     onEnterBack: () => container._marqueeTween?.play(),
//     onLeave: () => container._marqueeTween?.pause(),
//     onLeaveBack: () => container._marqueeTween?.pause()
//   });
}

let lastWidthHome = 0;

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("home-marqueeInner-1");
  const text = container?.querySelector(".marquee-text");
  if (!container || !text) return;

  document.fonts.ready.then(() => {
 
    initHomeMarquee(container, text);
	 
    let resizeTimeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = container.parentElement.offsetWidth;
        if (Math.abs(width - lastWidthHome) > 50) {
          lastWidthHome = width;
          initHomeMarquee(container, text);
//           ScrollTrigger.refresh();
        }
      }, 100);
    });

    resizeObserver.observe(container.parentElement);
  });
});

/*******************  Gsap Marquee Animation(Home)- 1****************/


/*******************  Gsap Marquee Animation(Home)- 2 ****************/
 function initHomeMarquee2(container, textEl) {
  if (!container || !textEl) return;

  // Clear all clones except the original
  while (container.children.length > 1) {
    container.removeChild(container.lastChild);
  }

  textEl.style.whiteSpace = 'nowrap';

  const textWidth = textEl.offsetWidth;
  const containerWidth = container.parentElement.offsetWidth;
  if (textWidth === 0 || containerWidth === 0) return;

  let total = textWidth;

  // Clone enough text elements to cover at least 2× container
  while (total < containerWidth + textWidth * 2) {
    const clone = textEl.cloneNode(true);
    clone.style.whiteSpace = 'nowrap';
    container.appendChild(clone);
    total += clone.offsetWidth;
  }

  // Kill existing tween
  if (container._marqueeTween) {
    container._marqueeTween.kill();
    container._marqueeTween = null;
  }

  gsap.set(container, { x: 0, force3D: true });
  const tween = gsap.to(container, {
    x: `-=${textWidth}`,
    duration: 18,
    ease: "linear",
    repeat: -1, 
    force3D: true,
    overwrite: true,
    modifiers: {
      x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
    }
  });

  container._marqueeTween = tween;

  
}

let lastWidthHome2 = 0;

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("home-marqueeInner-2");
  const text = container?.querySelector(".marquee-text-2");
  if (!container || !text) return;

  // Wait for fonts to load for accurate text width
  document.fonts.ready.then(() => {
  
    initHomeMarquee2(container, text);

    // Debounced resize + ScrollTrigger refresh
    let resizeTimeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = container.parentElement.offsetWidth;
        if (Math.abs(width - lastWidthHome2) > 50) {
          lastWidthHome2 = width;
          initHomeMarquee2(container, text);
//           ScrollTrigger.refresh();
        }
      }, 100);
    });

    resizeObserver.observe(container.parentElement);
  });
});


/*******************  Gsap Marquee Animation (Home)- 2****************/




/*************  Gsap Marquee Brand-Reimaging (Home)-3 ****************/
 function initHomeMarquee3(container, textEl) {
  if (!container || !textEl) return;

  // Clear all clones except the original
  while (container.children.length > 1) {
    container.removeChild(container.lastChild);
  }

  textEl.style.whiteSpace = 'nowrap';

  const textWidth = textEl.offsetWidth;
  const containerWidth = container.parentElement.offsetWidth;
  if (textWidth === 0 || containerWidth === 0) return;

  let total = textWidth;

  // Clone enough text elements to cover at least 2× container
  while (total < containerWidth + textWidth * 2) {
    const clone = textEl.cloneNode(true);
    clone.style.whiteSpace = 'nowrap';
    container.appendChild(clone);
    total += clone.offsetWidth;
  }

  // Kill existing tween
  if (container._marqueeTween) {
    container._marqueeTween.kill();
    container._marqueeTween = null;
  }

  gsap.set(container, { x: 0, force3D: true });
  const tween = gsap.to(container, {
    x: `-=${textWidth}`,
    duration: 18,
    ease: "linear",
    repeat: -1, 
    force3D: true,
    overwrite: true,
    modifiers: {
      x: gsap.utils.unitize(val => parseFloat(val) % textWidth)
    }
  });

  container._marqueeTween = tween;

  
}
 
let lastWidthHome3 = 0;

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("home-marqueeInner-3");
  const text = container?.querySelector(".brand-bgheading");
  if (!container || !text) return;

  // Wait for fonts to load for accurate text width
  document.fonts.ready.then(() => {
  
    initHomeMarquee3(container, text);

    // Debounced resize + ScrollTrigger refresh
    let resizeTimeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const width = container.parentElement.offsetWidth;
        if (Math.abs(width - lastWidthHome2) > 50) {
          lastWidthHome3 = width;
          initHomeMarquee3(container, text);
//           ScrollTrigger.refresh();
        }
      }, 100);
    });

    resizeObserver.observe(container.parentElement);
  });
});

 

/*************  Gsap Marquee Brand-Reimaging(Home)-3 ****************/





//******************* Counter Animation **********************/
gsap.registerPlugin(ScrollTrigger);

const counter1 = { value: 0 };
const counter2 = { value: 0 };
const counter3 = { value: 0 };

  
	
gsap.to(counter1, {
    value: 50,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#CounterTrigger",
        start: "top 90%", // start when top of #counter hits 90% of viewport
        once: true        // run only once
    },
    onUpdate: () => {
        document.getElementById("counter1").textContent = Math.floor(counter1.value);
    }
});

gsap.to(counter2, {
    value: 5,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#CounterTrigger",
        start: "top 90%", // start when top of #counter hits 90% of viewport
        once: true        // run only once
    },
    onUpdate: () => {
        document.getElementById("counter2").textContent = Math.floor(counter2.value);
    }
});

gsap.to(counter3, {
    value: 100,
    duration: 3,
    ease: "power1.out",
    scrollTrigger: {
        trigger: "#CounterTrigger",
        start: "top 90%", // start when top of #counter hits 90% of viewport
        once: true        // run only once
    },
    onUpdate: () => {
        document.getElementById("counter3").textContent = Math.floor(counter3.value);
    }
});

//******************* Counter Animation **********************/





//******************* Spiral -- Animation **********************/ 
// Move effect: slide in from edges to center, then back out 
// Set initial positions: left shadow off to the left, right shadow off to the right
gsap.set(".home-gif-left-shadow", { left: "0%", width: "25%" });
gsap.set(".home-gif-left", { scale: 0.9 });

gsap.set(".home-gif-right-shadow", { right: "0%", width: "35%" });
gsap.set(".home-gif-right", { scale: 0.9 });

function animateGifs() {
    // Animate left shadow in to 0 (edge to center), then back out
    gsap.to(".home-gif-left-shadow", {
        left: "20%",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.5,
        onStart: () => {
            // Scale up the spiral image as the shadow moves in
            gsap.to(".home-gif-left", {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut"
            });
        },
        onComplete: () => {
            gsap.to(".home-gif-left-shadow", {
                left: "0%",
                duration: 1.8,
                ease: "power3.inOut",
                delay: 0.5,
                onStart: () => {
                    // Scale back down the spiral image as the shadow moves out
                    gsap.to(".home-gif-left", {
                        scale: 0.9,
                        duration: 1.5,
                        ease: "power3.inOut"
                    });
                },

                onComplete: animateGifs
            });
        },
        scrollTrigger: {
            trigger: ".success-measure-section",
            start: "top 95%",
            once: true // run only once when section enters viewport
        }
    });

    // Animate right shadow in to 0 (edge to center), then back out
    gsap.to(".home-gif-right-shadow", {
        right: "35%",
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.5,
        onStart: () => {
            // Scale up the spiral image as the shadow moves in
            gsap.to(".home-gif-right", {
                scale: 1,
                duration: 1.5,
                ease: "power3.inOut"
            });
        },
        onComplete: () => {
            gsap.to(".home-gif-right-shadow", {
                right: "0%",
                duration: 1.8,
                ease: "power3.inOut",
                delay: 0.5,
                onStart: () => {
                    // Scale back down the spiral image as the shadow moves out
                    gsap.to(".home-gif-right", {
                        scale: 0.9,
                        duration: 1.5,
                        ease: "power3.inOut"
                    });
                },
            });
        },
        scrollTrigger: {
            trigger: ".success-measure-section",
            start: "top 95%",
            once: true
        }
    });
}

animateGifs();

//******************* Spiral -- Animation **********************/

 
 
