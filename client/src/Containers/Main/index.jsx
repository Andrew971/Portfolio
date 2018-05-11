import React, {Component} from 'react';
import About from '../../Content/About';
import Skills from '../../Content/Skills';
import Projects from '../../Content/Projects';
import {withRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import './styles.css'
class MainContainer extends Component {

  render() {
    return (<main>

      <Switch>
        <Route exact path='/' render={(routeProps) =>
            <Projects {...routeProps}/>}/>
        <Route path='/skills' render={(routeProps) => <Skills {...routeProps}/>}/>
        <Route path='/about' render={(routeProps) => <About {...routeProps}/>}/>
        <Route path='/education' render={(routeProps) => <Projects {...routeProps}/>}/>
        <Route path='/work_experience' render={(routeProps) => <Projects {...routeProps}/>}/>
      </Switch>
    </main>)
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(MainContainer));
