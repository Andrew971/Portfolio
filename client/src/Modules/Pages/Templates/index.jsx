import React, { Component } from "react";
// import Loading from '../../../utils/loading'
// const templateComponents = [Code, Marketing, Sales, Hamburger, Logo];

 export default class TemplateLoad  extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {

    //   templateComponents
    // .filter(res=>icon.toUpperCase()=== res.name.toUpperCase())
    // .map(res=> this.setState({component: res}))

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