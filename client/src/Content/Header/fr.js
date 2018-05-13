import React from "react";
import Button from '../../Components/Button'
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import {UIAction} from '../../Modules/UI'

export const HeaderFr = ({history,dispatch}) => (<Mask className="row" noneed>
  <HeadTitle className="col-12">Il y toujours de la place pour l'amélioration.
  </HeadTitle>
  <div className="col-12" align="center">
    <Button onClick={() => {
        dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Contact"}}))
     }} primary="primary">Besoin d'un site?</Button>
    <Button onClick={() => {
        dispatch(UIAction({type: "MODAL_DISPLAY", payload: {flag:true,type:"Hire"}}))
      }}>Vous voulez embaucher?</Button>
  </div>
</Mask>);
