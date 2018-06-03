import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import Main from './Main';
// import Ads from './Ads';
import FooterContainer from './Footer';
import Header from './Header';
import Nav from './Nav';
import {ThemeProvider} from 'styled-components';
import Modal from '../Content/Modal'
import Portal from '../js/portal'

class Containers extends Component {

  render() {
    const {Theme,modalDisplay} =this.props
    return (
      <ThemeProvider theme={Theme}>
        <div className="container-fluid">
          <Nav/>
          <Header/>
          {
            // <Ads/>
        }
          <Main/>
          <FooterContainer/>
            {modalDisplay && <Portal>
              <Modal />
            </Portal> }
        </div>
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

export default connect(mapStateToProps)(Containers);
