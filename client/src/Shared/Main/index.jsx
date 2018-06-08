import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'
import MyLoadable from '../../js/MyLoadable'

const AsyncHome = MyLoadable(() => import('../../Modules/Home'));
const AsyncSkills = MyLoadable(() => import('../../Modules/Skills'));

class MainContainer extends Component {

  render() {
    return (<main>

      <Switch>
        <Route exact path='/' render={(routeProps) =>
            <AsyncHome {...routeProps}/>}/>
        <Route path='/skills' render={(routeProps) =>
            <AsyncSkills {...routeProps}/>}/>
      </Switch>
    </main>)
  }
}


export default withRouter(MainContainer);
