import {fadeIn,fadeOut} from './fade'
import {slideIn,slideOut} from './slide'

const AnimationList = [
  {
    name: 'fadeIn',
    start : fadeIn
  },
  {
    name: 'FadeOut',
    start : fadeOut
  },
  {
    name: 'slideIn',
    start : slideIn
  },
  {
    name: 'slideOut',
    start : slideOut
  },
];

export default AnimationList;