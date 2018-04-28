import React, {Component, Fragment} from "react";
import Card from "../../Components/Card";
import WorkEn from '../../js/Projects/en'

const Expertise = () => (
  <Card  className="row align-items-center justify-content-center">
  <h1 className="col-12">Expertise</h1>
    <p>
 test
    </p>
  </Card>
);

const MyWork = () => (
  <Card  className="row align-items-center justify-content-center" primary>
    <h1 className="col-12">My Work</h1>
    {
      WorkEn.map(project =>
      <Fragment>
      <div className="col-md-6" style={{margin:'2rem 0'}}>
      <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">{project.name}</h2>
      <h6 className="card-text">{project.sub}</h6>
      <p>{project.description}</p>
    </div>
    </Fragment>
      )
    }
  </Card>
);


const Lab = () => (
    <Card  className="row align-items-center justify-content-center">
    <h1 className="col-12">My Lab</h1>
    {
      WorkEn.map(project =>
      <Fragment>
      <div className="col-md-6" style={{margin:'2rem 0'}}>
      <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">{project.name}</h2>
      <h6 className="card-text">{project.sub}</h6>
      <p>{project.description}</p>
    </div>
    </Fragment>
      )
    }
  </Card>
);

export class ProjectEn extends Component {
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
