import { TweenLite, Power2, } from "gsap/TweenMax";

export const fadeIn = (element) => {

TweenLite.to(element, .15, {opacity:"1", ease:Power2.easeInOut});

}

export const fadeOut = (element) => {

TweenLite.to(element, .1, {opacity:"0", ease:Power2.easeInOut});

}



