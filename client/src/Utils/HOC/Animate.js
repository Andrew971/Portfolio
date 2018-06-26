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

  isScrolling = (e) => {
    const {children} = this.props

    if (typeof children.type === 'string') {
      this.isElement(e)
    } else {
      this.isStyledComponent(e)
    }

  }

  isStyledComponent = (e) => {
    const {In, Out} = this.props
      const clientHeight = e.target.documentElement.clientHeight || e.target.body.clientHeight,
        show = clientHeight / 2;

      const child = this.props.children.type.componentStyle.lastClassName,
        getElement = document.getElementsByClassName(child)[0],
        getPositionOfElement = getElement.getBoundingClientRect(),
        outSide = getPositionOfElement.bottom <= (show/2),
        inSide = getPositionOfElement.top <= show && !outSide;

        console.log(inSide)
      if (In && inSide) {
        this.setState({className: In})
      } else if (Out && outSide) {
        this.setState({className: Out})
      } else {
        this.setState({className: ''})
      }
    }

    isElement = (e) => {
      const {In, Out} = this.props
        const clientHeight = e.target.documentElement.clientHeight || e.target.body.clientHeight,
          show = clientHeight / 2;

        const child = this.props.children.props.id,
          getElement = document.getElementById(child),
          getPositionOfElement = getElement.getBoundingClientRect(),
          outSide = getPositionOfElement.bottom <= (show / 2),
          inSide = getPositionOfElement.top <= show && !outSide;

        if (inSide && In) {
          this.setState({className: In})
        } else if (Out && outSide) {
          this.setState({className: Out})
        } else {
          this.setState({className: ''})
        }
      }

      modifyChildren = (child) => {
        const className = this.state.className

        const props = {
          className
        };

        return React.cloneElement(child, props);
      }

      componentWillUnmount = () => {
        window.removeEventListener("scroll", this.scrolling)
      }
      render() {
        const {children} = this.props
        return Children.map(children, (child) => this.modifyChildren(child))

      }
    }
