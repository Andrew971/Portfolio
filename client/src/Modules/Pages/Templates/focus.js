import React from "react";
import {SectionCard} from "../../../Components/Cards";
import {Title} from "../../../Components/Text";
import {Layout} from '../../../Components/Grid'
import Image from '../../../Components/Image'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../utils/constMethod'

const Focus = ({data}) => {
  const {image,title} = data
return (
<SectionCard>
  <Title primary>{title.text}</Title>
  <Layout container md lg xl direction="row" justify="space-around">
  {
    image
    .field   
    .sort(sort_by('DESC', 'order'))
    .map((focus,n) =>
      <Layout items key={n} padding="0">
      <Layout items>
      <LazyLoad height={200} offset={100}>
      <Image src={focus.path_1} alt="Card cap" />
      </LazyLoad>
      </Layout>
      <Layout items>
      <h2>{focus.name}</h2>
      </Layout>
  </Layout>
    )
  }
  </Layout>  
</SectionCard>
)};

export default Focus