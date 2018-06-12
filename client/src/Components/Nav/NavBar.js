import styled from "styled-components";
import React, { Component } from 'react'



export const StyledNavBar = styled.nav`
  width: 100%;
  height: 7vh;
  margin-left: ${props=>(props.open?'-80vw':0)};
  background:${props=>(props.flag?props.theme.secondary:'tranparent')};
  position: fixed;
  top: 0;
  padding: 0 5rem;
  font-size:1.2em;
  align-content: center;
  align-items: center;
  flex-flow: row nowrap;
  justify-content:space-between;
  box-shadow: ${props=>(props.flag?`0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)`:0)};
  display: flex;
  flex: 1 0 auto;
  transition : background 300ms ease-in-out,margin-left 500ms ease-in-out;
  z-index:1;
    @media (max-width: 840px) {
      padding: 0 1rem;
      height:auto;
      color:white;
}

  `;


export default class NavBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flag:false
    }
  }
  
  componentDidMount=()=>{
    document.addEventListener('scroll',(e)=>{
      console.log(e)
      let scroll = e.target.documentElement.scrollTop || e.target.body.scrollTop
      let clientHeight = e.target.documentElement.clientHeight||e.target.body.clientHeight
      let show = clientHeight - 100
      if(scroll >= show){
        this.setState({flag:true})
      }else{
        this.setState({flag:false})

      }

    })

  }
  
  render() {
    const { children , open} = this.props
    const { flag } = this.state
    return (
      <StyledNavBar flag={flag} open={open}>
        {children}
      </StyledNavBar>
    )
  }
}
