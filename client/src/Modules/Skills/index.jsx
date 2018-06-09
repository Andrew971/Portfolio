import React, {PureComponent, Fragment} from "react";
import Card from "../../Components/Card";
import {withRouter,} from 'react-router-dom'
import {connect} from 'react-redux';
import Title from "../../Components/Title";
import Layout from '../../Components/Grid/Layout'
import Grid from '../../Components/Grid/Grid'
import Image from '../../Components/Image'
import LazyLoad from 'react-lazyload';

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
<Card>
  <Title>{title.text}</Title>
  <Layout container md lg xl direction="row" justify="space-around">
  {
    image
    .field   
    .sort(sort_by('DESC', 'order'))
    .map((focus,n) =>
      <Layout items key={n} padding="0">
      <Layout items>
      <LazyLoad height={200} offset={100}>
      <Image height={5} src={focus.path_1} alt="Card cap" />
      </LazyLoad>
      </Layout>
      <Layout items>
      <h2>{focus.name}</h2>
      </Layout>
  </Layout>
    )
  }
  </Layout>  
</Card>
)};
const Knowledge = ({data}) => {
  const {image,title} = data
return (
<Card primary>
  <Title primary>{title.text}</Title>
  <Grid container>
  {
    image
    .field   
    .sort(sort_by('DESC', 'order'))
    .map((other,n) =>
      <Grid items key={n} >
      <LazyLoad height={200} offset={100}>
      <Image src={other.path_1} alt="Card cap"/>
      </LazyLoad>
      <h4>{other.name}</h4>
      </Grid>
    )
  }
  </Grid>
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
