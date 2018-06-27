import { css,keyframes } from 'styled-components'

const config = (opacity, translate)=>{
  let { x,y,z} = translate;
  return css`
  opacity:${opacity};
  transform: translate3D(${x},${y},${z});
  -moz-transform: translate3d(${x},${y},${z});
  -webkit-transform: translate3d(${x},${y},${z});
  -o-transform: translate(${x},${y});
  -ms-transform: translate(${x},${y});
  `
}
const translateInit = {
  x:0,
  y:0,
  z:0
}

const translateLeft = {
  x:'10vh',
  y:0,
  z:0
}

const translateRight = {
  x:'-10vh',
  y:0,
  z:0
}
const inRight = keyframes`
from { 
  ${config(0,translateLeft)}
   }
to { 
  ${config(1,translateInit)}
  }
`

const inLeft = keyframes`
from { 
  ${config(0,translateRight)}
   }
to { 
  ${config(1,translateInit)}
  }
`

const outRight = keyframes`
from { 
  ${config(1,translateInit)}
  }
to { 
  ${config(0,translateLeft)}
   }
`
const outLeft = keyframes`
from { 
  ${config(1,translateInit)}
   }
to { 
  ${config(0,translateRight)}
   }
`



export const slideIn = (side)=>{

  if(side==='left'){
    return css`
      animation: ${inRight} 0.8s ease forwards;
    `
  }else if(side==='right'){
    return css`
    animation: ${inLeft} 0.8s ease forwards;
  `
  }
}

export const slideOut = (side)=>{

  if(side==='left'){
    return css`
      animation: ${outLeft} 0.8s ease forwards;
    `
  }else if(side==='right'){
    return css`
    animation: ${outRight} 0.8s ease forwards;
  `
  }
}
