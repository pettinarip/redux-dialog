import * as c from './constants';

export function openDialog(name, payload) {
  return {
    type: c.OPEN_DIALOG,
    name: name,
    payload
  }
}

export function closeDialog(name, payload) {
  return {
    type: c.CLOSE_DIALOG,
    name: name,
    payload
  }
}
