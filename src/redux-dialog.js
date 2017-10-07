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
        const { isOpen, onRequestClose, params } = this.props;

        return (
          <Modal {...defaults} isOpen={isOpen} onRequestClose={onRequestClose}>
            <WrappedComponent {...params} />
          </Modal>
        );
      }
    }

    const mapStateToProps = (state, ownProps) => {
      const reducer = typeof state.get === 'function' ? state.get('dialog') : state.dialog;
      if (reducer.hasOwnProperty(name)) {
        return {
          isOpen: true,
          params: Object.assign({}, ownProps, reducer[name])
        };
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
