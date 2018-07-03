import React from "react";
import {SectionCard} from "../../../Components/Cards";
import {Title} from "../../../Components/Text";
import {Grid} from '../../../Components/Grid'
import {ImgageDiv} from '../../../Components/Image'
import LazyLoad from 'react-lazyload';
import {sort_by} from '../../../Utils/constants/constMethod'

const Style = {
  laptop: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))'
  },
  tablet: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(13rem, 1fr))'
  }
}

const Focus = ({data}) => {
  const {image, title} = data
  return (
    <SectionCard>
      <Title primary>{title.text}</Title>
      <Grid
        container
        xl
        direction="row"
        justify="space-around"
        autoFit
        lg={{
        ...Style.laptop
      }}
        md={{
        ...Style.tablet
      }}>
        {image
          .field
          .sort(sort_by('DESC', 'order'))
          .map((focus, n) => <Grid items key={n}>
            <LazyLoad height={200} offset={100}>
              <ImgageDiv size={4} src={focus.path_1} alt="Card cap"/>
            </LazyLoad>
            <h3>{focus.name}</h3>
          </Grid>)
}
      </Grid>
    </SectionCard>
  )
};

export default Focus