import React, {Component, Children} from 'react'

export default class Dragable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startX: 0,
      startY: 0,
      start: 0,
      width:80,
      position: 80,
      touching: false,
      thumb: 0
    };
  }

  componentDidMount = () => {
    window.addEventListener("touchstart", this.touchstart);
    window.addEventListener("touchmove", this.touchmove);
    window.addEventListener("touchend", this.touchend);
  }

  touchstart = (e) => {
    const startDirection = this.DirectionType(e, this.props.direction)
    let {clientX, clientY} = e.changedTouches[0];

    this.setState({startX: clientX, startY: clientY, start: startDirection, touching: true, thumb: startDirection})
  }

  DirectionType = (event, direction) => {
    let {clientX, clientY} = event.changedTouches[0];

    if (direction === 'left' || 'right') {
      return clientX
    } else if (direction === 'up' || 'down') {
      return clientY
    } else {
      return 'tap'
    }
  }

  touchmove = (e) => {
    const {thumb, position} = this.state

    const movingDirection = (this.props.direction === ('left' || 'right'))
      ? this.isDragingX()
      : this.isDragingY();

    const movingPosition = this.DirectionType(e, this.props.direction)
    const delta = movingPosition - thumb

    const newPosition = (movingDirection === ('left' || 'right'))
      ? position + delta
      : position - delta;

    // console.log(newPosition)
    this.setState(() => {
      return {thumb: movingPosition, position: newPosition, swipe: movingDirection}
    })

  }

  
  screenInit = () => {
    const {innerHeight, innerWidth} = window;
    const vw = (object)=>{
     let unit= (innerWidth * 0.01)
      return (object / unit);
    };
    const middleX = innerHeight / 2,
      middleY = innerWidth / 2,
      topEdge = innerHeight / 8,
      bottomEdge = innerHeight - topEdge,
      borderStartX = innerHeight / 4,
      borderEndX = middleX + borderStartX,
      borderEndY = middleY + borderStartX
    return {
      vw,
      middleX,
      middleY,
      topEdge,
      bottomEdge,
      borderStartX,
      borderEndX,
      borderEndY
    }
  }
  isDragingX = () => {
    const {startX, startY} = this.state;
    const {middleY, borderStartX, borderEndX} = this.screenInit()

      const swipeX = ((startY >= borderStartX) && (startY <= borderEndX)),
        left = startX > middleY,
        right = startX < middleY;

      return ((swipeX && left) && 'left') || ((swipeX && right) && 'right');

    }

    isDragingY = () => {
      const {startX, startY} = this.state;
      const {middleX, bottomEdge, borderStartY, borderEndY} = this.screenInit()

        const swipeY = ((startX >= borderStartY) && (startX <= borderEndY)),
          up = (startY > middleX && startY >= bottomEdge),
          down = (startY < middleX && startY <= bottomEdge);

        return ((swipeY && up) && 'up') || ((swipeY && down) && 'down');

      }

      touchend = (e) => {
        const { position , width} = this.state
        console.log(position)
        if(position > (width /2)){
          this.setState(() => {
            return {touching: false, position: 0}
          })
        }else{
          return {touching: false, position: 80}
        }
        
      }

      modifyChildren = (child) => {
        const position = this.state.position

        const props = {
          position
        };

        return React.cloneElement(child, props);
      }

      preventDefault = event => event.preventDefault()
      stopPropagation = event => event.stopPropagation()

      render() {
        const {children} = this.props
        return Children.map(children, (child) => this.modifyChildren(child))

      }
    }
