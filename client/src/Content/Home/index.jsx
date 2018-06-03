import React, {PureComponent, Fragment} from "react";
import Card from "../../Components/Card";
import Button from "../../Components/Button";
import Title from "../../Components/Title";
import Avatar from "../../Components/Avatar";
import Headlines from "../../Components/Headlines";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const sort_by = (order, value) => {
  if (order === 'ASC') {
    return (a, b) => b[value] - a[value]
  } else if (order === 'DESC') {
    return (a, b) => a[value] - b[value]
  }
}

const Biography = ({data}) => {
  const {title, subtitle, paragraph, image, background} = data
  return (
    <Card
      className="row align-items-center justify-content-center"
      primary="primary"
      src={background.path}>

      <div
        className="col-12 order-first order-lg-last col-lg-5"
        style={{
        margin: "auto"
      }}
        align="center">
        <Avatar src={image.field[0].path}/>
      </div>
      <div className="col-12 col-lg-7">
        <Headlines>
          <h1>{title.text}</h1>
          <h3>
            {subtitle.text}</h3>
          {paragraph
            .field
            .sort(sort_by('DESC', 'order'))
            .map((block, n) => {
              return (
                <Fragment key={n}>
                  <p>{block.paragraph}</p>
                </Fragment>
              )
            })}
        </Headlines>
      </div>
    </Card>
  )
};
const Expertise = ({Theme, data}) => {
  const {image,title} = data
  return (
    <Card>
      <Title className="col-12">{title.text}</Title>
      <div className="row" style={{
        margin: "2rem 0rem"
      }}>
        {image
          .field
          .sort(sort_by('DESC', 'order'))
          .map((services, n) =>
            <Fragment key={n}>
              <div className="col-md-4" align="center">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      className="img-fluid card-img-top"
                      src={Theme.label === "Main"
                      ? services.path_2
                      : services.path_1}
                      alt="Card cap"/>
                  </div>
                  <div className="col-md-12 card-body">
                    <h2 className="card-title">{services.name}</h2>
                    <p>{services.text}</p>
                  </div>
                </div>
              </div>
            </Fragment>
          )}
      </div>
    </Card>
  )
};

const MyWork = ({data}) => {
  let {project,title} = data
  return (
    <Card
      className="row align-items-center justify-content-center"
      primary="primary">
      <Title className="col-12" primary="primary">{title.text}</Title>

     
        {project
      .field
      .sort(sort_by('DESC', 'order'))
      .map((project,n) => (
          <Fragment key={n}>
          <div className="row align-items-center" >
            <div
              className={n % 2
              ? "col-md-6 order-md-last"
              : "col-md-6"}
              style={{
              margin: "2rem 0"
            }}>
              <img className="img-fluid card-img" src={project.img} alt="Card cap"/>
            </div>
            <div className="col-md-6 card-body" align="center">
              <h2 className="card-title">{project.name}</h2>
              <h6 className="card-text">{project.sub}</h6>
              <p>{project.description}</p>
              {project.link.url && (
                <Button
                  onClick={() => {
                  window.open(project.link.url, "_blank");
                }}
                  primary="primary">
                  {project.link.text}
                </Button>
         )}
      
            </div>
          </div>
          </Fragment>
        ))}

    </Card>
)};

const Lab = ({data}) => {
  let {project,title} = data

  return (
  <Card className="row align-items-center justify-content-center">
    <Title className="col-12">
      {title.text}
    </Title>
    {project
      .field
      .sort(sort_by('DESC', 'order'))
      .map((project,n)=> (
        <div className="row align-items-center" key={n}>
          <div
            className={n % 2
            ? "col-md-6 order-md-last"
            : "col-md-6"}
            style={{
            margin: "2rem 0"
          }}>
            <img className="img-fluid card-img" src={project.img} alt="Card cap"/>
          </div>
          <div className="col-md-6 card-body" align="center">
            <h2 className="card-title">{project.name}</h2>
            <h6 className="card-text">{project.sub}</h6>
            <p>{project.description}</p>
            {project.link.url && (
              <Button
                onClick={() => {
                console.log(window.location);
                window.open(project.link.url, "_blank");
              }}
                primary="primary">
                {project.link.text}
              </Button>
        )}

          </div>
        </div>
      ))}

  </Card>
)};

export class HomeEn extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {Theme,data} = this.props;
    const {pathname} = this.props.location
    const Section = data
      .Section
      .field
      .sort(sort_by('DESC', 'order'))
      .filter(section => section.placement === pathname)

    return (
      <Fragment>
        {Section.map((section, n) => <Fragment key={n}>
          {section.type === 'biography' && <Biography data={section.option}/>}
          {section.type === 'services' && <Expertise data={section.option} Theme={Theme}/>}
          {section.type === 'project' && <MyWork data={section.option}/>}
          {section.type === 'side-project' && <Lab data={section.option}/>}

        </Fragment>)}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {Theme: state.UI.Theme, 
    Modal: state.UI.Modal, 
    modalSAtatus: state.UI.modalSAtatus,
    data: state.UI.websiteContent
  };
};
export default withRouter(connect(mapStateToProps)(HomeEn));
