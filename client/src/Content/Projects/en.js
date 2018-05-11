import React, {Component, Fragment} from "react";
import Card from "../../Components/Card";
import Data from '../../js/Projects/en'
import background from '../../Assets/img/background1.jpg';
import Mask from "../../Components/Mask";
import Button from "../../Components/Button";

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

const Aboutme = () => (
  <Card  className="row align-items-center justify-content-center" src={background}>
    <Mask primary>
      <div className="row">
        <div className="col-12 order-first order-md-last col-md-5" style={{margin:'auto'}}>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-12" align="center">
              <div className="photo"></div>
            </div>
            <div className="col-12 col-md-12" style={{
                textAlign: 'center'
              }}>
              <h1>ANDREW SORDIER</h1>
            </div>

          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="card">
            <p>
              Mr. Crow, sitting in a tree, Held a piece of cheese in his beak. Mr. Fox, mouth watering from the scent, Uttered almost precisely this to him: “Hey! Good morning, Mr. Crow. How lovely you are! You look so beautiful! Without lying, if your songs Are in keeping with your feathers, You are the Phoenix of the inhabitants of these woods.” </p>

              <p>With these words the Crow feels nothing but delight. And to show off his beautiful voice, He opens a wide beak and lets his prey fall. The Fox grabs it and said: “My dear sir Learn that every flatterer Lives at the expense of the one who listens to him. This lesson is worth a piece of cheese, no doubt.” The Crow, ashamed and embarrassed, Swore, but a bit late, that he would never be fooled again.

            </p>
          </div>
        </div>
      </div>
    </Mask>
  </Card>
);

const MyWork = () => (
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


const Lab = () => (
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

const Contact = () => (
  <Card  className="row align-items-center justify-content-center" src={background}>
    <Mask primary>
    <h1 className="col-12">About us</h1>
    {
      Data.contact.map(project =>
      <Fragment key={project.key}>
        <div className="col-md-12" style={{margin:'0rem 0rem'}} align="center">
      <div className="col-md-6" style={{margin:'2rem 0'}}>
      <img className="img-fluid card-img-top" src={project.img} alt="Card cap"/>
    </div>
    <div className="col-md-6 card-body">
      <h2 className="card-title">{project.name}</h2>
      <h6 className="card-text">{project.sub}</h6>
      <p>{project.description}</p>
      <Button primary>Test</Button>
    </div>
  </div>
    </Fragment>
      )
    }
    </Mask>
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
        <Aboutme/>
        <MyWork/>
        <Lab />
        <Contact/>
      </Fragment>
    );
  }
}
