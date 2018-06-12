import React, { Component } from "react";
// import Loading from '../../../utils/loading'
import {templateComponents} from './export'
 export default class TemplateLoad  extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const {type} = this.props
      console.log(type)
      console.log(templateComponents)
    templateComponents
    .filter(res=>type.toUpperCase()=== res.name.toUpperCase())
    .map(res=> this.setState({component: res}))
    }

    render() {
      const C = this.state.component;
      console.log(C)
      return C ? <C {...this.props} /> : null;
    }
  }