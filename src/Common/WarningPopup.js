import React, { useState } from 'react';
//import { useSelector } from 'react-redux';
//import IsLoadingHOC from '../IsLoadingHOC';



function WarningPopupModel(props) {
    const { model, handleHidePopup} = props
   
    const buttonStyle = {
        minWidth: '70px'
    }
  
    return (
        <div id="myModal" className={`modal fade rsvp_alert_model  ${model ? "show" : "hide"}`} style={{ display: model ? "block" : "none" }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Alert</h4>
                        <button type="button" className="close" onClick={() => handleHidePopup()} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="alert_note">
                            {/* <h4>Are you sure you want to join this production?</h4> */}
                            <p>By agreeing to RSVP for this event, you are ensuring your space over another. If you choose not to attend after RSVP’ing, you can be subject to losing access to these live productions as we want to keep space available to those who can make it.</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" style={buttonStyle} className="btn btn-warning" onClick={() => handleHidePopup()} data-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WarningPopupModel