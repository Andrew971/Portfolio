import React, {Component, Children} from 'react'

export default class AnimateOnScroll extends Component {
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
    
    const Top = this.isStyledComponent(e,'top');
    const Bottom = this.isStyledComponent(e,'bottom');
    const {In, Out}= this.props

    if (Top&&In) {
      this.setState({className: In})
    } else if (Bottom&&Out){
      this.setState({className:Out})
    }else{
      this.setState({className:''})
    }
 
  }

  isStyledComponent = (e,position) => {
    // const scroll = e.target.documentElement.scrollTop || e.target.body.scrollTop;
    const clientHeight = e.target.documentElement.clientHeight||e.target.body.clientHeight,
     show = clientHeight /2;

    const child = this.props.children.type.componentStyle.lastClassName,
     getElement = document.getElementsByClassName(child)[0],
     getPositionOfElement = getElement.getBoundingClientRect(),
     In = (getPositionOfElement.top <= show && getPositionOfElement.bottom >= show) ,
     Out = getPositionOfElement.bottom <= show; 
  
    return (position==="top")?In:Out;
  }


  modifyChildren = (child) => {
    const className = this.state.className

    const props = {
      className
    };

    return React.cloneElement(child, props);
  }

  componentWillUnmount=()=>{
    window.removeEventListener("scroll", this.scrolling)
  }
  render() {
    const {children} = this.props
    return Children.map(children, (child) => this.modifyChildren(child))

  }
}


