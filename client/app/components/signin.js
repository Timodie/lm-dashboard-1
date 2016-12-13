import React from 'react';
export default class SignIn extends React.Component{

  onSearch() {
    this.context.router.push({ pathname: "Main" });
  }

  gotomain(e) {
    e.preventDefault();
    this.onSearch();
  }


render (){
return (
  <div id="fullscreen_bg" className="fullscreen_bg">
    <form className="form-signin">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-signin">
                  <h3 className="text-center">
                  SIGN IN</h3>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                      </span>
                      <input type="text" className="form-control" placeholder="Username" />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></span>
                      <input type="password" className="form-control" placeholder="Password" />
                    </div>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block" onClick={(e) => this.gotomain(e)} type="submit"> Sign In</button>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
    );
    }

    }

    SignIn.contextTypes = {
      router: React.PropTypes.object.isRequired
    };
