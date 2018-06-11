import React, { Component } from "react";

  
 export default class IconLoad  extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const res = await import(`./${this.props.icon}`)
        const { default: component } =  res;
        this.setState({
          component: component
        });
      
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }