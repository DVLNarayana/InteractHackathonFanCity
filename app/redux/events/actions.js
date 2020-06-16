import { getMatchDetails as getMatchDetailsAPI } from "../../services/livescoreAPIs";

export const SET_MATCH_DETAILS = "SET_MATCH_DETAILS";

export function setMatchDetails(eventId, matchDetails) {
  return {
    type: SET_MATCH_DETAILS,
    eventId,
    matchDetails,
  };
}

export function getMatchDetails(category, EventId, p) {
  return (dispatch, getState) => {
    var token = getState().user.securityTokenDetails["access_token"];
    return getMatchDetailsAPI(category, EventId, p)
      .then((responseData) => {
        dispatch(setMatchDetails(EventId, responseData));
      })
      .catch((err) => {
        console.log("getMatchDetails : ", err);
      });
  };
}
