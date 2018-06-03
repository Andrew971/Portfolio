import React, {PureComponent, Fragment} from "react";
import Card from "../../Components/Card";
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';
import Title from "../../Components/Title";

const sort_by = (order, value) => {
  if (order === 'ASC') {
    return (a, b) => b[value] - a[value]
  } else if (order === 'DESC') {
    return (a, b) => a[value] - b[value]
  }
}

const Focus = ({data}) => {
  const {image,title} = data
return (
<Card  className="row justify-content-center">
  <Title className="col-12">{title.text}</Title>
  {
    image
    .field   
    .sort(sort_by('DESC', 'order'))
    .map((focus,n) =>
      <Fragment key={n}>
        <div className="col-md-3" align="center">
      <div className="col-md-12">
      <img className="img-fluid card-img-top" src={focus.path_1} alt="Card cap"/>
    </div>
    <div className="col-md-12 card-body">
      <h2 className="card-title">{focus.name}</h2>
    </div>
  </div>
  </Fragment>
    )
  }
</Card>
)};
const Knowledge = ({data}) => {
  const {image,title} = data
return (
<Card  className="row justify-content-center" primary>
  <Title className="col-12" primary>{title.text}</Title>
  {
    image
    .field   
    .sort(sort_by('DESC', 'order'))
    .map((other,n) =>
      <Fragment key={n}>
        <div className="col-md-3" align="center">
      <div className="col-md-12">
      <img className="img-fluid card-img-top" src={other.path_1} alt="Card cap"/>
    </div>
    <div className="col-md-12 card-body">
      <h2 className="card-title">{other.name}</h2>
    </div>
  </div>
  </Fragment>
    )
  }
</Card>
)};



export class Skills extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {pathname} = this.props.location
    const {data} = this.props
    const Section = data
      .Section
      .field
      .sort(sort_by('DESC', 'order'))
      .filter(section => section.placement === pathname)
    return (
      <Fragment>
      {Section.map((section, n) => <Fragment key={n}>
          {section.type === 'focus' && <Focus data={section.option}/>}
          {section.type === 'other-skills' && <Knowledge data={section.option}/>}
        </Fragment>)}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    Modal: state.UI.Modal,
    modalSAtatus: state.UI.modalSAtatus,
    data: state.UI.websiteContent
  }

}
export default withRouter(connect(mapStateToProps)(Skills));
