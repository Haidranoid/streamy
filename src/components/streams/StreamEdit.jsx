import React from 'react';
import _ from 'lodash'
import {connect} from "react-redux";
import {fetchStream, editStream} from "../../redux/actions/streamActions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {

  componentDidMount() {
    this.id =  this.props.match.params.id;
    this.props.fetchStream(this.id);

  }

  onSubmit = values => {
    this.props.editStream(this.id,values)
  };

  render() {

    if (!this.props.stream) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          initialValues={
            _.pick(this.props.stream,'title','description')
          }
          onSubmit={this.onSubmit}/>
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
    editStream: (id, values) => dispatch(editStream(id, values))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
