import React from 'react';
import Modal from "../layout/Modal";
import history from "../history";
import {connect} from "react-redux";
import {deleteStream, fetchStream} from "../../redux/actions/streamActions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component {

  componentDidMount() {
    this.id = this.props.match.params.id;
    this.props.fetchStream(this.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(this.id)}
                className="ui button negative">Delete</button>
        <Link to='/'
              className="ui button">Cancel</Link>
      </React.Fragment>
    )
  };

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream?';
    } else {
      return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }
  }

  render() {
    return (
      <Modal title='Delete Stream'
             content={this.renderContent()}
             actions={this.renderActions()}
             onDismiss={() => history.push('/')}/>
    );
  }
}

const mapStateToProps = state => ({
  stream: state.streams.stream
});

const mapDispatchToProps = dispatch => ({
  fetchStream: id => dispatch(fetchStream(id)),
  deleteStream: id => dispatch(deleteStream(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
