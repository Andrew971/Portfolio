import React, {PureComponent, Fragment} from "react";
import Card from "../../Components/Card";
import {StyleLink} from "../../Components/Button";
import Title from "../../Components/Title";
import Avatar from "../../Components/Avatar";
import Headlines from "../../Components/Headlines";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Layout from '../../Components/Grid/Layout'
import Image from '../../Components/Image'


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
      className=""
      primary="primary"
      src={background.path}>
      <Layout container lg xl direction="row-reverse" alignItems="center">
        <Avatar src={image.field[0].path_1}/>   
      <Layout items>
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
      </Layout>
      </Layout>
    </Card>
  )
};
const Expertise = ({Theme, data}) => {
  const {image,title} = data
  return (
    <Card>
      <Title>{title.text}</Title>
      <Layout container md lg xl direction="row" justify="space-around">
        {image
          .field
          .sort(sort_by('DESC', 'order'))
          .map((services, n) =>
          <Layout items key={n}>
              <Layout items>
                    <Image size={5}
                      src={Theme.label === "Main"
                      ? services.path_2
                      : services.path_1}
                      alt="Card cap"/>
                      </Layout>
                      <Layout items xs md text="center">
                    <h2>{services.name}</h2>
                    <p>{services.text}</p>
                  </Layout>
                  </Layout>

          )}
          </Layout>
    </Card>
  )
};

const MyWork = ({data}) => {
  let {project,title} = data
  return (
    <Card
      primary>
      <Title  primary>{title.text}</Title>
      <Layout container md lg xl direction="row" alignItems="center" justify="space-around">

     
        {project
      .field
      .sort(sort_by('DESC', 'order'))
      .map((project,n) => (
          <Fragment key={n}>
            <Layout items>
            <Image size={30} src={project.img} alt="Card cap"/>
            </Layout>
            <Layout items xs md text="center">
              <h2 className="card-title">{project.name}</h2>
              <h6 className="card-text">{project.sub}</h6>
              <p>{project.description}</p>
              {project.link.url && (
                <StyleLink
                  onClick={() => {
                  window.open(project.link.url, "_blank");
                }}
                  primary="primary">
                  {project.link.text}
                </StyleLink>
         )}
      
            </Layout>
          </Fragment>
        ))}
</Layout>
    </Card>
)};

const Lab = ({data}) => {
  let {project,title} = data

  return (
  <Card>
    <Title className="col-12">
      {title.text}
    </Title>
    <Layout container md lg xl direction="row" alignItems="center" justify="space-around">
    {project
      .field
      .sort(sort_by('DESC', 'order'))
      .map((project,n)=> (
        <Fragment key={n}>
        <Layout items>
            <Image size={30} src={project.img} alt="Card cap"/>
          </Layout>
          <Layout items>
            <h2 className="card-title">{project.name}</h2>
            <h6 className="card-text">{project.sub}</h6>
            <p>{project.description}</p>
            {project.link.url && (
              <StyleLink
                onClick={() => {
                console.log(window.location);
                window.open(project.link.url, "_blank");
              }}
                primary="primary">
                {project.link.text}
              </StyleLink>
        )}

          </Layout>
        </Fragment>
      ))}
      </Layout>

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
