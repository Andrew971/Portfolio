import React,{Fragment} from 'react'
import {SectionCard} from "../../../Components/Cards";
import Avatar from "../../../Components/Avatar";
import {Layout} from '../../../Components/Grid'
import {Headlines} from "../../../Components/Text";
import {sort_by} from '../../../Utils/constants/constMethod'
import LazyLoad from 'react-lazyload';
import AnimateOnScroll from '../../../Utils/HOC/Animate'

 const Biography = ({data}) => {
  const {title, subtitle, paragraph, image, background} = data
  return (
    <SectionCard
      className=""
      primary
      src={background.path}>
      <Layout container lg xl direction="row-reverse" alignItems="center">
      <LazyLoad height={200} offset={100}>
      <AnimateOnScroll In="animation" Out="out">
        <Avatar src={image.field[0].path} srcx2={image.field[0].pathx2}/> 
        </AnimateOnScroll> 
        </LazyLoad> 
      <Layout items>
      <AnimateOnScroll In="animation" Out="out">
        <Headlines>
          <h2>{title.text}</h2>
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
        </AnimateOnScroll> 
      </Layout>
      </Layout>
    </SectionCard>
  )
};
export default Biography