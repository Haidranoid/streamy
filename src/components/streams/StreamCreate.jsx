import React from 'react';
import {connect} from 'react-redux'
import {createStream} from "../../redux/actions/streamActions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

  onSubmit = values => {
    this.props.createStream(values);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}


const mapdispatchToProps = dispatch => {
  return {
    createStream: values => dispatch(createStream(values))
  }
};

export default connect(null, mapdispatchToProps)(StreamCreate);
