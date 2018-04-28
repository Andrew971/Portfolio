import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import Main from './Main';
import Ads from './Ads';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import {ThemeProvider} from 'styled-components';

class Containers extends Component {

  render() {
    const {Theme} =this.props
    return (
      <ThemeProvider theme={Theme}>
        <div className="container-fluid">
          <Nav/>
          <Header/>
          <Ads/>
          <Main/>
          <Footer/>
        </div>
      </ThemeProvider>

    );
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.UI.Theme};
};

export default connect(mapStateToProps)(Containers);
