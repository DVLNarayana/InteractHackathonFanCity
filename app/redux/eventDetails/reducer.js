/* @flow */

import { SET_COMMENTARY_ENTRY } from "./actions";

export type State = {
  eventsCommentaries: any,
  landMarkAccessToken: string,
};

const initialState = {
  eventsCommentaries: {},
  landMarkAccessToken:
    "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiZGlyIn0..JMAhJqxhJ-K1HRHq.0lLNlyHMhBlhVJOi9xlCmUe3b-ZS0poVdWWOOcYt9iF8TPlEZF52kWJq6tzTG-y5PkCTl6WJHgfyou1nmMv_dJOVgmjlt83DoYubeS2RkIhVfBHFCP-vT0X3Xc2Ndg6OB-LFuECYbUiEUETXBTg3GpZjNC3idHevENmstxrlDz--TuM0cZ9iKpA315HAeHwKyskKdR6n2rH0MKEa8NwF9XYBUWLs2ESRnJdyFP2GWcJxrkeLSDHwkcBnkwxE-shOLePczfpRLO51c-ianZYLE-q1zGpDdFFLSp7yvCEHGtxaT-cyw3ScPI1wV4BIOIkD7WqymU8MijGLQQZKCUMZLm7vsA0fmNO8Uhl-dGFwYQfhVAY9g3f5uGbSioZQyL8c24soUsQIJRiaYoVl_jszEm-vZELESXgr7hdOkiEG5qj1nQkztrriPc0LMDOwuL_vhta1mmwHht9UszWacG1khe4r8w1m-HzjpAfXT9PNL2TkR4qn2m0U3pZIPgmlA6gdn1f4SURLiQ1-bkNKFYMmcIR8ojE28R378dJtJdRH9vdgRJVGUYa-pFwSbIJwPL-IGGh9hXzzqEEaBkdcOq7ZOHYiV-Fw0_DT-hM6oonTHdcwFc9-z_PrzHeaAEyy1_-Rrb9x4kc.FM0H--LCq5l5DofG5gjpWg",
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
