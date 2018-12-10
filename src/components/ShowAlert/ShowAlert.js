import React, { Component } from 'react';
import showAlert from './ShowAlert.css'
class ShowAlert extends Component {
  constructor(props){
    super(props);
  }
  hideAlert(){
      this.props.onHideAlert();
  }
  render() {
    const AlertShow = this.props.AlertShow
    return (
        <div className={showAlert.mask} style={AlertShow ? {"display" : "block"} : {"display" : "none"}}>
            <div className={showAlert.show_alert}>
                <h3>{this.props.ShowAlertTitle}</h3>
                <p>{this.props.ShowAlertContain}</p>
                <h4 onClick={this.hideAlert.bind(this)}>{this.props.ShowAlertBtn}</h4>
            </div>
        </div>
    )
  }
}
 export default ShowAlert;
