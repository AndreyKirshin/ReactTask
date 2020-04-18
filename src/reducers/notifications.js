import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from '../actions/notifications';

export function notifications(state = false, action) {
  switch (action.type) {
    case SHOW_NOTIFICATION: return true;
    case HIDE_NOTIFICATION: return false;
    default: return state;
  }
}