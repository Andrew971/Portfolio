import React, {Component, Fragment} from "react";
import Card from "../../Components/Card";
import Data from '../../js/skillData'
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';
import Title from "../../Components/Title";

const Focus = () => (
<Card  className="row align-items-center justify-content-center">
  <Title className="col-12">Focus</Title>
  {
    Data.focus.map(project =>
      <Fragment key={project.key}>
        <div className="col-md-3" align="center">
      <div className="col-md-12">
      <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-12 card-body">
      <h2 className="card-title">{project.name}</h2>
    </div>
  </div>
  </Fragment>
    )
  }
</Card>
);
const Knowledge = () => (
<Card  className="row align-items-center justify-content-center" primary>
  <Title className="col-12" primary>What I know</Title>
  {
    Data.other.map(project =>
      <Fragment key={project.key}>
        <div className="col-md-3" align="center">
      <div className="col-md-12">
      <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-12 card-body">
      <h2 className="card-title">{project.name}</h2>
    </div>
  </div>
  </Fragment>
    )
  }
</Card>
);



export class SkillFr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <Fragment>
        <Focus/>
        <Knowledge/>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    Modal: state.UI.Modal,
    modalSAtatus: state.UI.modalSAtatus
  }

}
export default withRouter(connect(mapStateToProps)(SkillFr));
