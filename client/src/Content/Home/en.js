import React, {Component, Fragment} from "react";
import Card from "../../Components/Card";
import Data from '../../js/Projects/en'
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import Avatar from "../../Components/Avatar";
import Headlines from "../../Components/Headlines";
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';

const Expertise = ({Theme}) => (
<Card>
  <Title className="col-12">Services</Title>
  <div className="row align-items-center justify-content-center" style={{margin:'2rem 0rem'}}>
  {
    Data.services.map(project =>
    <Fragment key={project.key}>
      <div className="col-md-4" align="center">
        <div className="row">
    <div className="col-md-12">
    <img className="img-fluid card-img-top" src={Theme.label ==='Main'
      ?project.img2
    :project.img1
  } alt="Card cap"/>
  </div>
  <div className="col-md-12 card-body">
    <h2 className="card-title">{project.name}</h2>
    <p>{project.description}</p>
  </div>
</div>
</div>
  </Fragment>
    )
  }
</div>
</Card>
);

const Aboutme = () => (
  <Card  className="row align-items-center justify-content-center" primary>
        <div className="col-12 order-first order-md-last col-md-5" style={{margin:'auto'}} align="center">
              <Avatar />
        </div>
        <div className="col-12 col-md-7">
          <Headlines>
              Mr. Crow, sitting in a tree, Held a piece of cheese in his beak. Mr. Fox, mouth watering from the scent, Uttered almost precisely this to him: “Hey! Good morning, Mr. Crow. How lovely you are! You look so beautiful! Without lying, if your songs Are in keeping with your feathers, You are the Phoenix of the inhabitants of these woods.”
          </Headlines>
        </div>
  </Card>
);

const MyWork = () => (
  <Card  className="row align-items-center justify-content-center">
    <Title className="col-12">My Works</Title>
    {
      Data.product.map(project =>
      <div className="row align-items-center" key={project.key}>
      <div className={(project.key%2)?'col-md-6 order-md-last':'col-md-6'} style={{margin:'2rem 0'}}>
      <img className="img-fluid card-img" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body" align="center">
      <h2 className="card-title">{project.name}</h2>
      <h6 className="card-text">{project.sub}</h6>
      <p>{project.description}</p>
        {project.url&&<Button onClick={()=>{
          window.open(project.url,'_blank')
        }}
          primary>Visit the website</Button>}
    </div>
  </div>
      )
    }
  </Card>
);


const Lab = () => (
  <Card  className="row align-items-center justify-content-center" primary>
    <Title className="col-12">My Labs</Title>
    {
      Data.lab.map(project =>
      <div className="row align-items-center" key={project.key}>
      <div className={(project.key%2)?'col-md-6 order-md-last':'col-md-6'} style={{margin:'2rem 0'}}>
      <img className="img-fluid card-img" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body" align="center">
      <h2 className="card-title">{project.name}</h2>
      <h6 className="card-text">{project.sub}</h6>
      <p>{project.description}</p>
      {!project.url&&<Button onClick={()=>{
        console.log(window.location)
        window.open(project.url,'_blank')
      }}
        primary>Visit the website</Button>}
    </div>
  </div>
      )
    }
  </Card>
);



export class HomeEn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
const { Theme } = this.props
    return (
      <Fragment>
        <Expertise Theme={Theme}/>
        <Aboutme/>
        <MyWork/>
        <Lab />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {

  return {
    Theme:state.UI.Theme,
    Modal: state.UI.Modal,
    modalSAtatus: state.UI.modalSAtatus
  }

}
export default withRouter(connect(mapStateToProps)(HomeEn));
