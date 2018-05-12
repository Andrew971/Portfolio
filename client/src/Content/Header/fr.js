import React from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import {UIAction} from '../../Modules/UI'

export const HeaderFr = ({history,dispatch}) => (<Mask className="row">
  <HeadTitle className="col-12">Si tu n'y arrives pas la première fois;<br/>Appelle ça version 1.0
  </HeadTitle>
  <div className="col-12" align="center">
    <Button onClick={() => {
        dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Contact"}}))
     }} primary="primary">J'ai besoin d'un site</Button>
    <Button onClick={() => {
        dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Hire"}}))
      }}>J'embauche</Button>
  </div>
</Mask>);
