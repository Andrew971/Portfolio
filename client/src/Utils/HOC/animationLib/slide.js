import { TweenLite, Power2, Elastic,Bounce } from "gsap/TweenMax";



export const slideIn = (element) => {

TweenLite.fromTo(element, 2.5,{x:100,y:0,z:0,opacity:"0"}, {x:0,y:0,z:0,opacity:"1", ease:Elastic.easeOut.config(1, 3.6)});

}

export const slideOut = (element) => {

TweenLite.fromTo(element, .5, {x:0,y:0,z:0, opacity:"1", ease:Power2.easeInOut},{x:100,y:0,z:0,opacity:"0", ease:Power2.easeInOut});

}



