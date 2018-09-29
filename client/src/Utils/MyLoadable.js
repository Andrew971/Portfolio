import React, { Component } from "react";
import FetchData from './HOC/fetchData'
// import Loading from '../utils/loading'

export default function MyLoadable(importComponent) {
  class MyLoadable extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();
      console.log(importComponent().then(test=>test))
      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <FetchData><C {...this.props} /></FetchData> : null;
    }
  }

  return MyLoadable;
}