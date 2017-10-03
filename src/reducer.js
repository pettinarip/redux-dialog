import * as c from './constants';

export default (state = {}, action) => {
  switch (action.type) {
    case c.OPEN_DIALOG:
      return Object.assign({}, state, {
        [action.name]: Object.assign({}, action.payload)
      })
    break;

    case c.CLOSE_DIALOG:
      delete state[action.name];
      return Object.assign({}, state);
    break;

    default:
      return state;
  }
}
