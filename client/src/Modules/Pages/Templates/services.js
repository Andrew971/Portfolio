import React from 'react'
import {SectionCard} from "../../../Components/Cards";
import {Grid,Layout} from '../../../Components/Grid'
import {Title} from "../../../Components/Text";
import IconLoad from '../../../Components/SvgIcon'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../Utils/constants/constMethod'

const Services = ({data}) => {
  const {image,title} = data
  return (
    <SectionCard>
      <Title primary>{title.text}</Title>
      <Grid container md lg xl direction="row" justify="space-between" autoFit>
        {image
          .field
          .sort(sort_by('DESC', 'order'))
          .map((services, n) =>
          <Grid items key={n}>
              <Layout items>
              <LazyLoad height={200} offset={100}>
                  <IconLoad  icon={services.icon||'hamburger'}/>
                      </LazyLoad>
                      </Layout>
                      <Layout items>
                    <h3>{services.name}</h3>
                    <p>{services.text}</p>
                  </Layout>
                  </Grid>

          )}
          </Grid>
    </SectionCard>
  )
};
export default Services