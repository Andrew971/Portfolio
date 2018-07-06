import React, {Component, Children} from 'react'

export default class AnimateOnScroll extends Component {
  constructor(props) {
    super(props)
    this.state = {
      className: ''
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.isScrolling)
  }

  isScrolling = () => {
    const {children,offSet={}} = this.props
    
    if (typeof children.type === 'string') {
      this.isElement(children,offSet)
    } else {
      this.isStyledComponent(children,offSet)
    }

  }

  isStyledComponent = (children,offSet) => {
    const child = children.type.componentStyle.lastClassName,
      getElement = document.getElementsByClassName(child)[0],
      getPositionOfElement = getElement.getBoundingClientRect(), {bottom, height, top} = getPositionOfElement,
      outSide = bottom <=(offSet.bottom||height)||(top >= (offSet.top||height)),
      inSide = top <= (offSet.top||height)&& !outSide;

    return this.addClass(inSide, outSide)

  }

  isElement = (children,offSet) => {
    const child = children.props.id,
      getElement = document.getElementById(child),
      getPositionOfElement = getElement.getBoundingClientRect(), {bottom, height, top} = getPositionOfElement,
      outSide = bottom <= offSet.bottom,
      inSide = top <= offSet.top && !outSide ;
    console.log('top:'+top)
    console.log('bottom:'+bottom)
    console.log('height:'+height)
    return this.addClass(inSide, outSide)
  }

  addClass = (inSide, outSide) => {
    const {In, Out} = this.props

    if (inSide && In) {
      this.setState({className: In})
    } else if (Out && outSide) {
      this.setState((prevState) => {
        let check = prevState
          .className
          .includes(In) || prevState
          .className
          .includes(Out);
        return {
          className: check
            ? Out
            : ''
        }
      })
    } else {
      this.setState({className: ''})
    }
    
  }

  modifyChildren = (child) => {
    const {className} = this.state
    // console.log(className)
    const props = {
      className
    };

    return React.cloneElement(child, props);
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.isScrolling)
  }
  render() {
    const {children} = this.props
    return Children.map(children, (child) => this.modifyChildren(child))

  }
}
