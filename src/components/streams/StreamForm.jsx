import React from 'react';
import {reduxForm, Field} from "redux-form";


class StreamForm extends React.Component {

  onSubmit = values => {
    this.props.onSubmit(values);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form">
        <label htmlFor="title">Enter Title</label>
        <Field
          name="title"
          className='field'
          component='input'/>

        <label htmlFor="title">Enter Description</label>
        <Field
          name="description"
          className='field'
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

export default reduxForm({
  form: 'streamForm',
  validate: validate,
  enableReinitialize: true
})(StreamForm);
