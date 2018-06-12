import React from 'react'
import {SectionCard} from "../../../Components/Cards";
import {Layout} from '../../../Components/Grid'
import {Title} from "../../../Components/Text";
import IconLoad from '../../../Components/SvgIcon'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../utils/constMethod'

const Services = ({Theme, data}) => {
  const {image,title} = data
  return (
    <SectionCard>
      <Title primary>{title.text}</Title>
      <Layout container md lg xl direction="row" justify="space-around">
        {image
          .field
          .sort(sort_by('DESC', 'order'))
          .map((services, n) =>
          <Layout items key={n}>
              <Layout items>
              <LazyLoad height={200} offset={100}>
                  <IconLoad  icon={services.icon||'hamburger'}/>
                      </LazyLoad>
                      </Layout>
                      <Layout items xs md text="center">
                    <h2>{services.name}</h2>
                    <p>{services.text}</p>
                  </Layout>
                  </Layout>

          )}
          </Layout>
    </SectionCard>
  )
};
export default Services