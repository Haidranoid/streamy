import React from 'react';
import Modal from "../layout/Modal";
import history from "../history";

const StreamDelete = () => {

  const actions = (
    <>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </>
  );

  return (
    <div>
      StreamDelete
      <Modal title='Delete Stream'
             content='Are you sure want to delte this stream?'
             actions={actions}
             onDismiss={() => history.push('/')}/>
    </div>
  )
};

export default StreamDelete;
