import React, {Component} from 'react';
import About from '../../Content/About';
import Skills from '../../Content/Skills';
import Home from '../../Content/Home';
import {withRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import './styles.css'

class MainContainer extends Component {

  render() {
    return (<main>

      <Switch>
        <Route exact path='/' render={(routeProps) =>
            <Home {...routeProps}/>}/>
        <Route path='/skills' render={(routeProps) =>
            <Skills {...routeProps}/>}/>
      </Switch>
    </main>)
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(MainContainer));
