import React from 'react';
import {reduxForm, Field} from "redux-form";
import {createStream} from "../../redux/actions/streamActions";
import {connect} from 'react-redux'

class StreamCreate extends React.Component {

  renderError(meta) {

  }

  renderInput({input,label,meta}) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = values => {
    this.props.createStream(values,this.props.history);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form">
        <label htmlFor="title">Enter Title</label>
        <Field
          className='field'
          name="title"
          component='input'/>

        <label htmlFor="title">Enter Description</label>
        <Field
          className='field'
          name="description"
          component='input'/>

        <button
          type="submit"
          className="ui button primary">Submit
        </button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must enter a title';
  }
  if (!values.description) {
    errors.description = 'You must enter a description';
  }
};

const formWrapped =  reduxForm({
  form: 'streamCreate',
  validate: validate,
})(StreamCreate);

const mapdispatchToProps = dispatch => {
  return {
    createStream: values => dispatch(createStream(values))
  }
};

export default connect(null,mapdispatchToProps)(formWrapped);
