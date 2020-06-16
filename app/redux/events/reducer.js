/* @flow */

import { SET_MATCH_DETAILS } from "./actions";

export type State = {
  events: any,
};

const initialState = {
  events: {},
};

export default function (state: State = initialState, action): State {
  switch (action.type) {
    case SET_MATCH_DETAILS:
      state.events[action.eventId] = action.matchDetails;
      return state;
    default:
      return state;
  }
}
