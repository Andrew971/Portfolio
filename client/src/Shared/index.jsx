import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import Main from './Main';
import FooterContainer from './Footer';
import Header from './Header';
import Nav from './Nav';
import {ThemeProvider} from 'styled-components';
import Modal from '../Modules/Modal'
import Portal from '../js/portal'

class App extends Component {

 
  render() {
    const {Theme,modalDisplay} =this.props

    return (
      <ThemeProvider theme={Theme}>
        <Fragment>
          <Nav/>
          <Header/>
          <Main/>
          <FooterContainer/>
            {modalDisplay && <Portal>
              <Modal />
            </Portal> }
            </Fragment>
      </ThemeProvider>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    Theme: state.UI.Theme,
    modalDisplay: state.UI.modalDisplay,
  };
};

export default connect(mapStateToProps)(App);
