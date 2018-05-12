import React, {Component, Fragment} from "react";
import Card from "../../Components/Card";
import Data from '../../js/Projects/en'
import background from '../../Assets/img/background1.jpg';
import Mask from "../../Components/Mask";
import Button from "../../Components/Button";
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';

const Expertise = () => (
<Card  className="row align-items-center justify-content-center">
  <h1 className="col-12">Services</h1>
  {
    Data.services.map(project =>
    <Fragment key={project.key}>
      <div className="col-md-4" style={{margin:'0rem 0rem'}} align="center">
    <div className="col-md-12" style={{margin:'2rem 0'}}>
    <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
  </div>
  <div className="col-md-12 card-body">
    <h2 className="card-title">{project.name}</h2>
    <h6 className="card-text">{project.sub}</h6>
    <p>{project.description}</p>
  </div>
</div>
  </Fragment>
    )
  }
</Card>
);

const MyWork = () => (
  <Card  className="row align-items-center justify-content-center" primary>
    <h1 className="col-12">My Work</h1>
    {
      Data.product.map(project =>
      <div className='row' key={project.key}>
      <div className={(project.key%2)?'col-md-6 order-md-last':'col-md-6'} style={{margin:'2rem 0'}}>
      <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">{project.name}</h2>
      <h6 className="card-text">{project.sub}</h6>
      <p>{project.description}</p>
    </div>
  </div>
      )
    }
  </Card>
);


const Lab = () => (
  <Card  className="row align-items-center justify-content-center">
    <h1 className="col-12">My Work</h1>
    {
      Data.product.map(project =>
      <div className='row' key={project.key}>
      <div className={(project.key%2)?'col-md-6 order-md-last':'col-md-6'} style={{margin:'2rem 0'}}>
      <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">{project.name}</h2>
      <h6 className="card-text">{project.sub}</h6>
      <p>{project.description}</p>
    </div>
  </div>
      )
    }
  </Card>
);


export class HomeFr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <Fragment>
        <Expertise/>
        <MyWork/>
        <Lab />
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
export default withRouter(connect(mapStateToProps)(HomeFr));