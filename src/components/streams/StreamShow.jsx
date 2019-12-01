import React from 'react';
import {connect} from "react-redux";
import {fetchStream} from "../../redux/actions/streamActions";
import {CircularProgress} from "@material-ui/core";

class StreamShow extends React.Component{

  componentDidMount() {
    this.id = this.props.match.params.id;
    this.props.fetchStream(this.id)
  }

  render() {

    if (!this.props.stream) {
      return <CircularProgress/>
    }

    const {title, description} = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    stream: state.streams.stream,
  }
};

const mapDispatchToProps = dispatch =>{
  return{
    fetchStream: id => dispatch(fetchStream(id)),

  }
};
export default connect(mapStateToProps,mapDispatchToProps)(StreamShow);
