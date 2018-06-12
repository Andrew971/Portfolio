import React, {Component} from "react";
import {Code, Marketing, Sales, Hamburger, Logo} from './export'

const iconComponents = [Code, Marketing, Sales, Hamburger, Logo];
export default class IconLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: null
    };
  }

  async componentDidMount() {
    const {icon} = this.props
    iconComponents
    .filter(res=>icon.toUpperCase()=== res.name.toUpperCase())
    .map(res=> this.setState({component: res}))
  }

  render() {
    const C = this.state.component;

    return C
      ? <C {...this.props}/>
      : null;
  }
}