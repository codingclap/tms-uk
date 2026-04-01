 
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



 