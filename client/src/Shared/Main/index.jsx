import React, {Component} from 'react';
import Skills from '../../Content/Skills';
import Home from '../../Content/Home';
import {withRouter, Switch, Route} from 'react-router-dom'

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


export default withRouter(MainContainer);
