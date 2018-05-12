import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import {UIAction} from "../../Modules/UI";
import {SocialMedia} from '../../Content/socialMedia'
import FooterContent from '../../Content/Footer'
class footer extends Component {

  render() {
    const {dispatch} = this.props;

    return (
      <Fragment>
      <FooterContent />
    <footer className="row align-items-center justify-content-center" style={{padding:'0 5rem'}}>
      <div className="col"><select
                  onChange={e => {
                  dispatch(UIAction({type: "CHANGE_THEME", payload: e.target.value}));
                }}
                  style={{
                  backgroundColor: 'transparent',
                  border: 0,
                  color: 'white'
                }}
                  >
                  <option value="Main">Main</option>
                  <option value="Blue">Blue</option>
                </select></div>

              <SocialMedia/>
    </footer>
    </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    Theme: state.UI.Theme};
};

export default connect(mapStateToProps)(footer);
