import React from 'react';
import Modal from 'react-modal';
import {unixTimeToString, checkcolor, hideElement, checkstatus, checkshowbutton} from '../../util.js';


export default class View_log_Entry extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modalIsOpen : false
      };
    }

    openModal(e){
      e.preventDefault();
      this.setState({
        modalIsOpen : true
      });
    }

    checkAR(status,time){
      if (status == "Approved" && time != 0) {
        return false;
      }
      else if (status == "Rejected" && time != 0) {
        return false;
      }
      else {
        return true;
      }
    }

    checkPending(status,time){
      if (status == "Pending" && time == 0) {
        return false;
      }
      else {
        return true;
      }
    }

    checkAP(status,time){
      if (status == "Approved" && time == 0) {
        return false;
      }
      else {
        return true;
      }
    }

    closeModal(e){
      e.preventDefault();
      this.setState({
        modalIsOpen : false
      });
    }

    render() {
      const customStyles = {
        overlay : {
          position          : 'fixed',
          top               : 0,
          left              : 0,
          right             : 0,
          bottom            : 0,
          backgroundColor   : 'rgba(255, 255, 255, 0.75)'
        },
        content : {
          position                   : 'absolute',
          top                        : '100px',
          left                       : '100px',
          right                      : '100px',
          bottom                     : '100px',
          border                     : '1px solid #ccc',
          overflow                   : 'auto',
          WebkitOverflowScrolling    : 'touch',
          borderRadius               : '15px',
          outline                    : 'none',
          padding                    : '5px'

        }
      };
      return (
        <tr className={checkcolor(this.props.status)}>
          <td>{unixTimeToString(this.props.date)}</td>
          <td>{this.props.username}</td>
          <td>{this.props.macroname}</td>
          <td>
            <div className={checkstatus(this.props.status, this.props.date)} onClick={(e) => this.openModal(e)}>{this.props.status}</div>
            <div className={checkshowbutton(this.props.status, this.props.date)}>{this.props.status}</div>
            <Modal isOpen={this.state.modalIsOpen} style={customStyles} contentLabel="data">
              <center>
                <h2 ref="subtitle">Data Information</h2>
              </center>
              <div>{this.props.data}</div>
              <button className="btn btn-default btn-sm close_button" type="button" onClick={(e) => this.closeModal(e)}>close</button>
            </Modal>
          </td>
          <td>
            <div className={hideElement(this.checkAR(this.props.status, this.props.date))}>{unixTimeToString(this.props.finishtime)}</div>
            <div className={hideElement(this.checkAP(this.props.status, this.props.date))}>Awaiting response</div>
            <div className={hideElement(this.checkPending(this.props.status, this.props.date))}>In progress</div>
          </td>
        </tr>
      )
   }
 }
