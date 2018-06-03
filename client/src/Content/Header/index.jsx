import React from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import {UIAction} from '../../Modules/UI'

 const HeaderContent = ({history,dispatch,data}) =>{ 
  const { button , title} = data
  return(
  <Mask className="row" noneed>
        <HeadTitle className="col-12">{title.text}</HeadTitle>
      <div className="col-12" align="center">
        {button.field.map((button,n)=>
          <Button key={n} onClick={() => {
            dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:button.name}}))
         }} primary={n ===0?true:false}>{button.text}</Button>
        )}
        </div>
  </Mask>
)};
export default HeaderContent