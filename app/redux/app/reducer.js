/* @flow */

import {
  APP_SHOW_ALERT,
  APP_RESET_ALERT,
  APP_CAN_SHOW_PAGE_BUSY,
} from './actions';

export type State = {
  alertMessage: any,
  isPageBusy: boolean,
};

const initialState = {
  alertMessage: undefined,
  isPageBusy: false,
};

export default function (state: State = initialState, action): State {
  switch (action.type) {
    case APP_SHOW_ALERT:
      return {
        ...state,
        alertMessage: action.alertMessage,
      };
    case APP_RESET_ALERT:
      return {
        ...state,
        alertMessage: initialState.alertMessage,
      };
    case APP_CAN_SHOW_PAGE_BUSY:
      return {
        ...state,
        isPageBusy: action.status,
      };
    default:
      return state;
  }
}
