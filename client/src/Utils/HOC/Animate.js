import React, {PureComponent, Children} from 'react'
import AnimationList from './animationLib'; //list of js animation ( eg GSAP)

export default class AnimateOnScroll extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      animationState: false,
      className: ''
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.isScrolling)
  }

  isScrolling = () => {
    const {
      children,
      offSet = {}
    } = this.props;

    const childrenArray = Children.toArray(children);

    childrenArray.length > 1
      ? Children
        .toArray(children)
        .map(child => this.isComponentVisible(child, offSet))
      : this.isComponentVisible(children, offSet)

  }


  isComponentVisible = (children, offSet) => {    
    const child = children.props.id || children.type.componentStyle.lastClassName,
    getElement = document.getElementById(child) || document.getElementsByClassName(child)[0];

    const getPositionOfElement = getElement.getBoundingClientRect(), {bottom, height, top} = getPositionOfElement;

    const leavingTop = (top >= (offSet.top || height));
    const leavingBottom = bottom <= (offSet.bottom || height);
    const enteringTop = top <= (offSet.top || height);

    const leaving = leavingBottom || leavingTop,
    entering = enteringTop && !leaving;

    return this.addAnimation(getElement, entering, leaving)

    }

    addAnimation = (element, entering, leaving) => {
      const {onEnter, onLeave, gsap} = this.props;

      const getAnimation = (props) => AnimationList.find(effect => (props.toUpperCase() === effect.name.toUpperCase()));

      const enteringAnimation = getAnimation(onEnter);
      const leavingAnimation = getAnimation(onLeave);

      const checkPrevClass = (prevState, onEnter, onLeave) => prevState
        .className
        .includes(onEnter) || prevState
        .className
        .includes(onLeave);

      const checkPrevAnimation = (prevState, animationState) => prevState.animationState !== animationState;

      if (entering && onEnter) {
        this.setState((prevState) => {
          const checkingState = checkPrevAnimation(prevState, true)
          checkingState && enteringAnimation && enteringAnimation.start(element)
          return {
            animationState: true,
            className: !gsap
              ? onEnter
              : ''
          }
        })

      } else if (leaving && onLeave) {

        this.setState((prevState) => {
          const checkingState = checkPrevAnimation(prevState, false)
          checkingState && leavingAnimation && leavingAnimation.start(element)
          return {
            animationState: false,
            className: checkPrevClass(prevState, onEnter, onLeave)
              ? onLeave
              : ''
          }
        })

      } else {
        this.setState({className: '', animationState: false});
      }

    }

    modifyChildren = (child) => {
      const {className} = this.state

      const props = {
        className
      };

      return React.cloneElement(child, props);
    }

    componentWillUnmount = () => {
      window.removeEventListener("scroll", this.isScrolling);
    }

    render() {
      const {children} = this.props;
      const {className} = this.state;
      // console.log(this.state.animationState)

      return className
        ? Children.map(children, (child) => this.modifyChildren(child))
        : children;

    }
  }
