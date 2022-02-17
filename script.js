const animate = gsap.timeline({
    paused: true
})
const animateBackground = new TimelineMax({
    paused: true
})
let toggle = true 

animateBackground
    .to("body", 0.1, {
        backgroundImage: "none",
        backgroundColor: "#111"
    }, 0.2)
    .set(".switch", {
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)"
    })
    .to(".text p", 0.1, {
        color: "#fff"
    }, 0.2)

animate
    .to(".toggle-button", 0.2, { 
        scale: 0.7 
    }, 0)
    .set(".toggle", { 
        backgroundColor: "#FFF" 
    })
    .set(".circle", { 
        display: "none" 
    })
    .to(".moon-mask", 0.2, { 
        translateY: 20, translateX: -10 
    }, 0.2)
    .to(".toggle-button", 0.2, { 
        translateY: 49 
    }, 0.2)
    .to(".toggle-button", 0.2, { 
        scale: 0.9 
    })

document.getElementsByClassName("switch")[0].addEventListener("click", () => {
        if(toggle){
            animate.restart();
            animateBackground.restart();
        } else {
            animate.reverse();
            animateBackground.reverse();
        }
        toggle = !toggle;
    });
