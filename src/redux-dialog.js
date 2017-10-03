import React, { Component } from 'react';
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { closeDialog, openDialog } from './actions';

const reduxDialog = (defaults) => {

  const {
    name
  } = defaults;

  return((WrappedComponent) => {
    class ReduxDialog extends Component {
      render () {
        const { isOpen, onRequestClose, payload } = this.props;

        return (
          <Modal {...defaults} isOpen={isOpen} onRequestClose={onRequestClose}>
            <WrappedComponent {...payload} />
          </Modal>
        );
      }
    }

    const mapStateToProps = state => {
      const reducer = typeof state.get === 'function' ? state.get('dialog') : state.dialog;
      if (reducer.hasOwnProperty(name)) {
        return Object.assign({}, { isOpen: true, payload: reducer[name] });
      } else {
        return {}
      }
    };

    const mapDispatchToProps = (dispatch, props) => ({
      onRequestClose: () => {
        dispatch(closeDialog(name))
      }
    })

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog);

  });
}

export default reduxDialog;
