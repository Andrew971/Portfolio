import React, {Component, Fragment} from "react";
import Card from "../../Components/Card";
import Data from "../../js/Projects/fr";
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import Avatar from "../../Components/Avatar";
import Headlines from "../../Components/Headlines";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const Expertise = ({Theme}) => (
  <Card>
    <Title className="col-12">Services</Title>
    <div
      className="row"
      style={{margin: "2rem 0rem"}}
    >
      {Data.services.map(project => (
        <Fragment key={project.key}>
          <div className="col-md-4" align="center">
            <div className="row">
              <div className="col-md-12">
                <img
                  className="img-fluid card-img-top"
                  src={Theme.label === "Main" ? project.img2 : project.img1}
                  alt="Card cap"
                />
              </div>
              <div className="col-md-12 card-body">
                <h2 className="card-title">{project.name}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  </Card>
);

const Aboutme = () => (
  <Card className="row align-items-center justify-content-center" primary>
    <div
      className="col-12 order-first order-lg-last col-lg-5"
      style={{margin: "auto"}}
      align="center"
    >
      <Avatar />
    </div>
    <div className="col-12 col-lg-7">
      <Headlines>
        <h1>Salut! Je m'appelle Andrew</h1>
        <h3> Je suis un Full Stack Web Developpeur</h3>
        <p>Je suis originaire de la Guadeloupe, dans les Antilles françaises. J'ai travaillé comme commercial et Consultant en web marketing pendant quatre ans.</p>
        <p>Aujourdh'hui, je design et developpe des produits interactifs et intuitifs pour professionnels et particuliers. J'aime concevoir des sites internet créatifs,modernes and personalisés. Lorsque je ne code pas, je lis, j'ecoute de la music ou bien je joue de la guitar.</p>
        <p>Faire usage des technologies pour permetre à tout le monde d'être connecté est l'objectif que je me suis fixé.
        </p>
      </Headlines>
    </div>
  </Card>
);

const MyWork = () => (
  <Card className="row align-items-center justify-content-center" primary>
    <Title className="col-12" primary>Ce sur quoi j'ai travaillé</Title>
    {Data.product.map(project => (
      <div className="row align-items-center" key={project.key}>
        <div
          className={project.key % 2 ? "col-md-6 order-md-last" : "col-md-6"}
          style={{margin: "2rem 0"}}
        >
          <img
            className="img-fluid card-img"
            src={project.img}
            alt="Card cap"
          />
        </div>
        <div className="col-md-6 card-body" align="center">
          <h2 className="card-title">{project.name}</h2>
          <h6 className="card-text">{project.sub}</h6>
          <p>{project.description}</p>
          {project.url && (
            <Button
              onClick={() => {
                window.open(project.url, "_blank");
              }}
              primary
            >
              Visiter le site
            </Button>
          )}
        </div>
      </div>
    ))}
  </Card>
);

const Lab = () => (
  <Card className="row align-items-center justify-content-center">
    <Title className="col-12">
Mes Autres Projects
    </Title>
    {Data.lab.map(project => (
      <div className="row align-items-center" key={project.key}>
        <div
          className={project.key % 2 ? "col-md-6 order-md-last" : "col-md-6"}
          style={{margin: "2rem 0"}}
        >
          <img
            className="img-fluid card-img"
            src={project.img}
            alt="Card cap"
          />
        </div>
        <div className="col-md-6 card-body" align="center">
          <h2 className="card-title">{project.name}</h2>
          <h6 className="card-text">{project.sub}</h6>
          <p>{project.description}</p>
          {project.url && (
            <Button
              onClick={() => {
                console.log(window.location);
                window.open(project.url, "_blank");
              }}
              primary
            >
            Visiter le site
            </Button>
          )}
        </div>
      </div>
    ))}
  </Card>
);

export class HomeFr extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {Theme} = this.props;
    return (
      <Fragment>
        <Aboutme />
        <Expertise Theme={Theme} />
        <MyWork />
        <Lab />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    Theme: state.UI.Theme,
    Modal: state.UI.Modal,
    modalSAtatus: state.UI.modalSAtatus
  };
};
export default withRouter(connect(mapStateToProps)(HomeFr));
