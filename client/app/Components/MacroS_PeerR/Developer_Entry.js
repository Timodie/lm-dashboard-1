import React from 'react';
import Modal from 'react-modal';
import {unixTimeToString, hideElement} from '../../util.js';


export default class Developer_Entry extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        modalIsOpen : false
      };
    }

    checkstatus(value){
      if (value == "Pending" || value == "Rejected") {
        return true;
      } else {
        return false;
      }
    }

    openModal(e){
      e.preventDefault();
      this.setState({
        modalIsOpen : true
      });
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
        <tr>
          <th scope="row">{this.props.id}</th>
          <td>{unixTimeToString(this.props.Date)}</td>
          <td>{this.props.Macroname}</td>
          <td>
            <center>
              {this.props.status}
            </center>
          </td>
          <td>
            <center>
              <button className={"btn btn-default btn-sm View_button " + hideElement(this.checkstatus(this.props.status))} type="button" onClick={(e) => this.openModal(e)}>View</button>
            </center>
            <Modal isOpen={this.state.modalIsOpen} style={customStyles} contentLabel="data">
              <center>
                <h2 ref="subtitle">Data Information</h2>
              </center>
              <div>I am a modal</div>
              <button className="btn btn-default btn-sm close_button" type="button" onClick={(e) => this.closeModal(e)}>close</button>
            </Modal>
          </td>
        </tr>
     )
   }
 }
