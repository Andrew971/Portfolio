import React, {Component} from "react";
import {iconComponents} from './export'

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
    .map(res=> this.setState({component: res.component}))
  }

  render() {
    const C = this.state.component;

    return C
      ? <C {...this.props}/>
      : null;
  }
}