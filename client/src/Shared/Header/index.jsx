import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import HeaderContent from './Content'
import {HeroCard} from '../../Components/Cards'

class HeaderContainer extends Component {

  render() {
    const {pathname} = this.props.location
    const { data,dispatch }  = this.props
    const headerData = data.Header.field.filter(header=>(header.placement === pathname)).map(header=>header.option)

    return (<Fragment>
      {headerData.map((header,n)=>{
      const {background} = header
      return(
    <HeroCard key={n} src={background.path} x2src={background.pathx2}>
    <HeaderContent data={header} dispatch={dispatch}/>
    </HeroCard>
  )})}
      </Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.UI.websiteContent
  };
};

export default withRouter(connect(mapStateToProps)(HeaderContainer));
