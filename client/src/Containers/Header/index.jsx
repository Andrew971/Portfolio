import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import HeaderContent from '../../Content/Header'
import StyledHeader from '../../Components/Header'

class HeaderContainer extends Component {

  render() {
    const {pathname} = this.props.location
    const { data }  = this.props
    const headerData = data.Header.field.filter(header=>(header.placement === pathname)).map(header=>header.option)

    return (<Fragment>
      {headerData.map((header,n)=>{
      const {background} = header
      return(
    <StyledHeader key={n} src={background.path}>
    <HeaderContent data={header}/>
    </StyledHeader>
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
