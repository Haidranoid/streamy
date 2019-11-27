import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class GoogleAuth extends Component {
  state = {
    isSignedIn: null
  };

  // script in index
  // <script src="https://apis.google.com/js/api.js"></script>

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '15323470973-8clebf4hl5pg83q9oav10t2jaod1idme.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get(),
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        }
      );
    })
  };

  onAuthChange = () =>{
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    })
  };

  handleSignInClick = () => {
    this.auth.signIn();
  };

  handleSignOutClik = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {

      return <div><CircularProgress size={10}/></div>

    }else if (this.state.isSignedIn) {

      return <button
        onClick={this.handleSignOutClik}
        className="ui red google button">
        <i className="google icon"/>
        Sign Out
      </button>
    }else{

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

export default GoogleAuth;
