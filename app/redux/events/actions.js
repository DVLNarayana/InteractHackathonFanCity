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
  console.log("outside category, EventId, p", category, EventId, p);
  return (dispatch) => {
    console.log("category, EventId, p", category, EventId, p);
    return getMatchDetailsAPI(category, EventId, p)
      .then((responseData) => {
        dispatch(setMatchDetails(EventId, responseData));
      })
      .catch((err) => {
        console.log("getMatchDetails : ", err);
      });
  };
}
