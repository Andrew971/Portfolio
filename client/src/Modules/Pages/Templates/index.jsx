import React, { Component } from "react";
// import Loading from '../../../utils/loading'
  
 export default class TemplateLoad  extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const res = await import(`./${this.props.type}`)
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