import React, {Component} from 'react';
import {withRouter, Switch, Route} from 'react-router-dom'
import MyLoadable from '../../Utils/MyLoadable'
import NotFound from '../404'

const AsyncHome = MyLoadable(() => import('../../Modules/Pages/index'));
const AsyncSkills = MyLoadable(() => import('../../Modules/Pages/index'));

class MainContainer extends Component {

  componentDidMount =() =>{
    window.scrollTo(0,0)
  }
  render() {
    return (<main>

      <Switch>
        <Route exact path='/' render={(routeProps) =>
            <AsyncHome {...routeProps}/>}/>
        <Route path='/skills' render={(routeProps) =>
            <AsyncSkills {...routeProps}/>}/>
        <Route render={(routeProps) =>
            <NotFound {...routeProps}/>}/>
      </Switch>
    </main>)
  }
}


export default withRouter(MainContainer);
