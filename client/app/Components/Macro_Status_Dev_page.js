import React from 'react';
import Developer_Entry from './commentpage/comment.js'
import CommentThread from './commentpage/commentthread.js'


export default class Macro_Status_Page extends React.Component {

  render() {
    return (
      <div className="container">
        <div class="row title">
          <div class="col-md-12 pull-left">
              <h1>Macro Status(Developer)</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 Devthread">
            <div className="panel panel-default Devthread">
              <div className="panel-body">
                <CommentThread onPost={(firstname, lastname, email, contents) => this.handleCommentPost(firstname, lastname, email, contents)} onSecondPost={(email,contents) => this.handleSecondCommentPost(email,contents)}>
                  {this.state.comments.map((comment, i) => {
                    return (
                      <Comment key={i} data={comment} onReply={(commentid,firstname,lastname,email,contents) => this.handleFreply(commentid,firstname,lastname,email,contents)} onSecondReply={(commentid,email,contents) => this.handleSreply(commentid,email,contents)} />
                    );
                  })}
                </CommentThread>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
