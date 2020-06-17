/* @flow */

import { SET_COMMENTARY_ENTRY } from "./actions";

export type State = {
  eventsCommentaries: any,
  landMarkAccessToken: string,
};

const initialState = {
  eventsCommentaries: {},
  landMarkAccessToken:
    "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..x2RU9s-WwEffJwek.T7D8dU-POUdKOYkmsd-Z8wWz7FLFdcdeO9HOIL8hL0-KDN6sT71WL98l4_ifQfvKmXZgog7AjGRZ3a4Gn1pVnHhh6KezA_mmYRbGsPKzjFm3lisjvtCji5JIEAOTCJRuib2U7UX8aIwsSY8g1ya3764ZL64ZrHlj8mreaPM1w3CLo89GyBJCMz65IINGRt-VNyznU_AzYL2KY4KShQWmnaY9pWngoujmdvgTSlHfFeGoir9RFyKjzDlgMc5osWuUYpJIJ78KWc7WkVeG8egcP-WEqZMJQoVoTmu0TZVjd2ibCRgPeDQspnX_SquoMAv-eVr8AEarrrgueBuqbUxsA1VqxUiEG-JrLOLAvmjHv3HeuHSjRQZCUqJd1brqa9ESUpE-jh74CbbehhHq9egCJSxtMO_604-E2rKGNNbn-aKOTZW9D70qsTBsSRm7qXgNmtrgwexwsGcee4OmlBAcyU1bfwuzla6Y3p8REKmTTi5BgMCfF7n4sdXEAE6Svy9_9I0k02V0y-fmha2ER9ujeumICXtdXHsI6rgVL-hbJ94n7HMkEtcBsYlIvs9tBTWQNb7fqJxYQWnO9dLIFLoCTXXAI7UXmbx_1S4DYnSSHdv9SPm-cp0U7zgLAJFOLHCMuGjoWJ4.J-KaOfCheX_CqcV8rs3DKg",
};

export default function (state: State = initialState, action): State {
  switch (action.type) {
    case SET_COMMENTARY_ENTRY:
      state.eventsCommentaries[action.eventId] = state.eventsCommentaries[
        action.eventId
      ]
        ? [action.CommentaryEntry].concat(
            state.eventsCommentaries[action.eventId]
          )
        : [action.CommentaryEntry];
      return {
        ...state,
      };
    default:
      return state;
  }
}
