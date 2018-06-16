import React, {PureComponent, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {sort_by} from '../../Utils/constants/constMethod'
import TemplateLoad from './Templates'

 class Home extends PureComponent {
 
  render() {
    const {Theme,Data} = this.props;
    const {pathname} = this.props.location
    const Section = Data
      .Section
      .field
      .sort(sort_by('DESC', 'order'))
      .filter(section => section.placement === pathname)

      return (
      <Fragment>
        {Section.map((section, n) => <Fragment key={n}>
        <TemplateLoad  type={section.type||'biography'} data={section.option} Theme={Theme}/>
        </Fragment>)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {Theme: state.Share.Theme, 
    Data: state.Share.websiteContent
  };
};
export default withRouter(connect(mapStateToProps)(Home));
