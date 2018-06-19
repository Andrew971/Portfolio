import React, {Component, Children} from 'react'

export default class Effects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      className: ''
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.scrolling)
  }

  
  scrolling = (e) => {
    const scroll = e.target.documentElement.scrollTop || e.target.body.scrollTop;
    const start = this.isStyledComponent(scroll)

    if (start) {
      this.setState({className: this.props.effect})
    } else {
      // this.setState({className:''})
    }
  }

  isStyledComponent = (scroll) => {
    const getElement = document.getElementsByClassName(this.props.children.type.componentStyle.lastClassName)[0],
      getPositionOfElement = getElement.getBoundingClientRect(),
      startEffect = scroll >= getPositionOfElement.top
        ? true
        : false;
    // console.log(this.props.children)
    return startEffect
  }


  modifyChildren = (child) => {
    const className = this.state.className

    const props = {
      className
    };

    return React.cloneElement(child, props);
  }
  render() {
    const {children} = this.props
    return Children.map(children, (child) => this.modifyChildren(child))

  }
}
