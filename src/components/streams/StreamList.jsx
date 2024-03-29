import React from 'react';
import {connect} from "react-redux";
import {fetchStreams} from "../../redux/actions/streamActions";
import {CircularProgress} from "@material-ui/core";
import {Link} from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="ui button primary">Edit</Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative">Delete</Link>
        </div>
      )
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{textAlign: 'right'}}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle aligned icon camera"/>
          <div className="content">
            <Link to={`/streams/${stream.id}`}>
              {stream.title}
            </Link>

            <div className="description">
              {stream.description}
            </div>

          </div>
        </div>
      );
    });
  }

  render() {

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">
          {
            this.props.streams.length !== 0 ? this.renderList() : <CircularProgress/>
          }
        </div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  streams: state.streams.streams,
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = dispatch => ({
  fetchStreams: () => dispatch(fetchStreams())
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
