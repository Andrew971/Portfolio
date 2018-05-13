import React from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import {UIAction} from '../../Modules/UI'

export const HeaderEn = ({history,dispatch}) => (
  <Mask className="row" noneed>
        <HeadTitle className="col-12">If at first you don’t succeed;<br/>
          call it version 1.0</HeadTitle>
      <div className="col-12" align="center">
        <Button onClick={() => {
            dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Contact"}}))
         }} primary>Need a website?</Button>
      <Button onClick={() => {
          dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Hire"}}))
        }}>Looking to hire?</Button>
      </div>
  </Mask>
);
