import { getMatchDetails as getMatchDetailsAPI } from "../../services/livescoreAPIs";

export const SET_MATCH_DETAILS = "SET_MATCH_DETAILS";

export function setMatchDetails(eventId, matchDetails) {
  return {
    type: SET_MATCH_DETAILS,
    eventId,
    matchDetails,
  };
}

export function getCommentaryEntries(eventId) {
  return (dispatch, getState) => {
    const com = getState().events[eventId].Com;
    


    return getMatchDetailsAPI(category, EventId, p)
      .then((responseData) => {
        dispatch(setMatchDetails(EventId, responseData));
      })
      .catch((err) => {
        console.log("getMatchDetails : ", err);
      });
  };
}
