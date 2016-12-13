import React from 'react';
import Modal from 'react-modal';

export default class Adm_Entry extends React.Component {

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
            <td>{this.props.date}</td>
            <td>{this.props.username}</td>
            <td>{this.props.macroname}</td>
            <td>
              <div className="row">
                <div className="col-md-4 col-md-offset-1 Approve_button">
                  <button className="btn btn-default btn-sm Approve" type="button">Approve</button>
                </div>
                <div className="col-md-4 col-md-offset-1 reject_button">
                  <button className="btn btn-default btn-sm Reject" type="button">Reject</button>
                </div>
              </div>
            </td>
            <td>
              <center>
                <button className="btn btn-default btn-sm View_button" type="button" onClick={(e) => this.openModal(e)}>View</button>
              </center>
              <Modal isOpen={this.state.modalIsOpen} style={customStyles} contentLabel="data">
                <center>
                  <h2 ref="subtitle">Macro Information</h2>
                </center>
                <div>I am a modal</div>
                <button className="btn btn-default btn-sm close_button" type="button" onClick={(e) => this.closeModal(e)}>close</button>
              </Modal>
            </td>
          </tr>

     )
   }
 }
