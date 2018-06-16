import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {HeroCard} from '../../Components/Cards'

class NotFound extends Component {

  render() {
    return (<HeroCard>
          404
    </HeroCard>)
  }
}


export default withRouter(NotFound);
