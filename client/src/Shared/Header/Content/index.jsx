import React,{Fragment} from "react";
import Button from '../../../Components/Button'
import {HeadTitle} from '../../../Components/Text'
import {sort_by} from '../../../Utils/constants/constMethod'

  const HeaderContent = ({history,dispatch,data}) =>{ 
  const { button , title} = data
  return(
  <Fragment>
        <HeadTitle>{title.text}</HeadTitle>
      <div align="center">
        {button
        .field
        .sort(sort_by('DESC','order'))
        .map((button,n)=>
          <Button key={n} onClick={() => {
            dispatch({type: "MODAL_DISPLAY", payload: {flag:true,type:button.name}})
         }} primary={n ===0?true:false}>{button.text}</Button>
        )}
        </div>
  </Fragment>
)};

export default HeaderContent