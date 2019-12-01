import React from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../redux/actions/streamActions";
import {CircularProgress} from "@material-ui/core";
import flv from 'flv.js';

class StreamShow extends React.Component {

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.id = this.props.match.params.id;
    this.props.fetchStream(this.id);
    this.buildPlayer();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${this.id}.flv`
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.buildPlayer();
  }


  componentWillUnmount() {
    this.player.destroy();
  }


  render() {

    if (!this.props.stream) {
      return <CircularProgress/>
    }

    const {title, description} = this.props.stream;
    return (
      <div>
        <video
          style={{width: '100%'}}
          controls
          ref={this.videoRef}/>

        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    stream: state.streams.stream,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStream: id => dispatch(fetchStream(id)),

  }
};
export default connect(mapStateToProps, mapDispatchToProps)(StreamShow);
