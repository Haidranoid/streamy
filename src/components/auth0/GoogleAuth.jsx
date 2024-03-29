import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {signIn, signOut} from "../../redux/actions/authActions";
import {connect} from "react-redux";

class GoogleAuth extends Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '15323470973-8clebf4hl5pg83q9oav10t2jaod1idme.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());


          this.auth.isSignedIn.listen(this.onAuthChange);
        }
      );
    })
  };

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    }else{
      this.props.signOut();
    }
  };

  handleSignInClick = () => {
    this.auth.signIn();
  };

  handleSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div><CircularProgress size={10}/></div>

    } else if (this.props.isSignedIn) {
      return <button
        onClick={this.handleSignOutClick}
        className="ui red google button">
        <i className="google icon"/>
        Sign Out
      </button>
    } else {
      return <button
        onClick={this.handleSignInClick}
        className="ui green google button">
        <i className="google icon"/>
        Sign In
      </button>
    }
  }

  render() {
    return (
      <div className="item">{this.renderAuthButton()}</div>
    );
  };
}

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = dispatch => ({
  signIn: userId => dispatch(signIn(userId)),
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
