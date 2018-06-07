import React from "react";
import Button from '../../../Components/Button'
import Mask from '../../../Components/Mask'
import HeadTitle from '../../../Components/HeadTitle'

  const HeaderContent = ({history,dispatch,data}) =>{ 
  const { button , title} = data
  return(
  <Mask>
        <HeadTitle >{title.text}</HeadTitle>
      <div  align="center">
        {button.field.map((button,n)=>
          <Button key={n} onClick={() => {
            dispatch({type: "MODAL_DISPLAY", payload: {flag:true,type:button.name}})
         }} primary={n ===0?true:false}>{button.text}</Button>
        )}
        </div>
  </Mask>
)};

export default HeaderContent