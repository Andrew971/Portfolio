import React, {PureComponent, Children} from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {sort_by} from '../../Utils/constants/constMethod';

const fetchData = (data, pathname) => data
  .Section
  .field
  .sort(sort_by('DESC', 'order'))
  .filter(section => section.placement === pathname);


class FetchData extends PureComponent {
constructor(props) {
    super(props)
    const {Data, location: {
        pathname
      }} = this.props;
    console.log(pathname);
    this.state = {
      data: fetchData(Data, pathname)
    }
  }


    modifyChildren = (child) => {
      const {data} = this.state

      const props = {
        data
      };

      return React.cloneElement(child, props);
    }


    render() {
      const {children} = this.props;
      const {data} = this.state;
      // console.log(this.state.animationState)

      return data
        ? Children.map(children, (child) => this.modifyChildren(child))
        : children;

    }
  }

  const mapStateToProps = state => {
    return {Theme: state.Share.Theme, Data: state.Share.websiteContent};
  };

  export default withRouter(connect(mapStateToProps)(FetchData));
  // export default withRouter(MainContainer);