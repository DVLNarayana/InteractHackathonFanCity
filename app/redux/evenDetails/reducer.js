/* @flow */

import { SET_MATCH_DETAILS } from "./actions";

export type State = {
  events: any,
};

const initialState = {
  events: {
    T1: [
      {
        ID: 8178,
        I: [
          {
            P: 1,
            Id: 8178,
          },
          {
            P: 2,
            Id: 618,
          },
          {
            P: 5,
            Id: 618,
          },
          {
            P: 6,
            Id: 2681,
          },
          {
            P: 7,
            Id: 128,
          },
        ],
        Kn: 1,
        Gd: 1,
        Nm: "Bayer Leverkusen",
      },
    ],
    Tr1: "2",
    Trh1: "1",
    T2: [
      {
        ID: 9823,
        I: [
          {
            P: 1,
            Id: 9823,
          },
          {
            P: 2,
            Id: 281,
          },
          {
            P: 5,
            Id: 281,
          },
          {
            P: 6,
            Id: 2672,
          },
          {
            P: 7,
            Id: 985,
          },
        ],
        Kn: 1,
        Gd: 1,
        Nm: "FC Bayern München",
      },
    ],
    Tr2: "4",
    Trh2: "3",
    IDs: [
      {
        P: 1,
        ID: 3081629,
        d: 1,
        Sid: 862613,
      },
      {
        P: 5,
        ID: 850009,
      },
      {
        P: 6,
        ID: 21971237,
      },
    ],
    ID: 53579,
    Sg: 1,
    Esd: 20200606203000,
    Esid: 6,
    Epr: 2,
    Eps: "FT",
    Ewt: 2,
    Ern: 30,
    Vnm: "BayArena",
    Vcid: 3,
    Refs: [
      {
        Nm: "Manuel Graefe",
        Kn: 0,
        Cid: 3,
        Cn: "Germany",
      },
    ],
    Incs: {
      "1": [
        {
          Min: 8,
          Nm: 2,
          IT: 43,
          ID: 429265,
        },
        {
          Min: 10,
          Nm: 1,
          Sc: [1, 0],
          Incs: [
            {
              IT: 36,
              ID: 269222,
            },
            {
              IT: 63,
              ID: 59595,
            },
          ],
        },
        {
          Min: 27,
          Nm: 2,
          Sc: [1, 1],
          Incs: [
            {
              IT: 36,
              ID: 429265,
            },
            {
              IT: 63,
              ID: 343748,
            },
          ],
        },
        {
          Min: 30,
          Nm: 1,
          IT: 43,
          ID: 614449,
        },
        {
          Min: 32,
          Nm: 2,
          IT: 43,
          ID: 93447,
        },
        {
          Min: 35,
          Nm: 1,
          IT: 43,
          ID: 208230,
        },
        {
          Min: 40,
          Nm: 2,
          IT: 43,
          ID: 116772,
        },
        {
          Min: 42,
          Nm: 2,
          Sc: [1, 2],
          Incs: [
            {
              IT: 36,
              ID: 343748,
            },
            {
              IT: 63,
              ID: 116772,
            },
          ],
        },
        {
          Min: 45,
          Nm: 2,
          Sc: [1, 3],
          Incs: [
            {
              IT: 36,
              ID: 385437,
            },
            {
              IT: 63,
              ID: 460632,
            },
          ],
        },
      ],
      "2": [
        {
          Min: 66,
          Nm: 2,
          Sc: [1, 4],
          Incs: [
            {
              IT: 36,
              ID: 93447,
            },
            {
              IT: 63,
              ID: 116772,
            },
          ],
        },
        {
          Min: 74,
          Nm: 1,
          IT: 43,
          ID: 128106,
        },
        {
          Min: 89,
          Nm: 1,
          Sc: [2, 4],
          Incs: [
            {
              IT: 36,
              ID: 1152455,
            },
            {
              IT: 63,
              ID: 857176,
            },
          ],
        },
      ],
    },
    Subs: {
      "2": [
        {
          Min: 46,
          Nm: 1,
          IT: 4,
          ID: 614449,
          IDo: 331540,
        },
        {
          Min: 46,
          Nm: 1,
          IT: 5,
          ID: 331540,
          IDo: 614449,
        },
        {
          Min: 46,
          Nm: 1,
          IT: 4,
          ID: 208230,
          IDo: 1152455,
        },
        {
          Min: 46,
          Nm: 1,
          IT: 5,
          ID: 1152455,
          IDo: 208230,
        },
        {
          Min: 46,
          Nm: 1,
          IT: 4,
          ID: 671331,
          IDo: 487867,
        },
        {
          Min: 46,
          Nm: 1,
          IT: 5,
          ID: 487867,
          IDo: 671331,
        },
        {
          Min: 62,
          Nm: 1,
          IT: 4,
          ID: 59595,
          IDo: 857176,
        },
        {
          Min: 62,
          Nm: 1,
          IT: 5,
          ID: 857176,
          IDo: 59595,
        },
        {
          Min: 66,
          Nm: 2,
          IT: 4,
          ID: 429265,
          IDo: 163670,
        },
        {
          Min: 66,
          Nm: 2,
          IT: 5,
          ID: 163670,
          IDo: 429265,
        },
        {
          Min: 74,
          Nm: 2,
          IT: 4,
          ID: 343748,
          IDo: 37410,
        },
        {
          Min: 74,
          Nm: 2,
          IT: 4,
          ID: 385437,
          IDo: 172949,
        },
        {
          Min: 74,
          Nm: 2,
          IT: 5,
          ID: 37410,
          IDo: 343748,
        },
        {
          Min: 74,
          Nm: 2,
          IT: 5,
          ID: 172949,
          IDo: 385437,
        },
        {
          Min: 76,
          Nm: 1,
          IT: 4,
          ID: 269222,
          IDo: 212893,
        },
        {
          Min: 76,
          Nm: 1,
          IT: 5,
          ID: 212893,
          IDo: 269222,
        },
        {
          Min: 85,
          Nm: 2,
          IT: 4,
          ID: 751202,
          IDo: 504606,
        },
        {
          Min: 85,
          Nm: 2,
          IT: 5,
          ID: 504606,
          IDo: 751202,
        },
      ],
    },
    Stat: [
      {
        Tnb: 2,
        Cos: 4,
        Att: 0,
        Crs: 19,
        Fls: 5,
        Ofs: 4,
        Rcs: 0,
        Shbl: 2,
        Shof: 4,
        Shon: 8,
        Ths: 18,
        Ycs: 3,
        Goa: 3,
        Trt: 0,
        Pss: 54,
      },
      {
        Tnb: 1,
        Cos: 6,
        Att: 0,
        Crs: 17,
        Fls: 13,
        Ofs: 3,
        Rcs: 0,
        Shbl: 2,
        Shof: 1,
        Shon: 5,
        Ths: 11,
        Ycs: 3,
        Goa: 5,
        Trt: 0,
        Pss: 46,
      },
    ],
    Lu: [
      {
        Tnb: 2,
        Fo: [4, 2, 3, 1],
        Ps: [
          {
            Pid: 36183,
            Snu: 17,
            Pos: 2,
            Fp: "2:2",
          },
          {
            Pid: 93447,
            Snu: 9,
            Pos: 4,
            Fp: "5:1",
          },
          {
            Pid: 473852,
            Snu: 24,
            Pos: 7,
          },
          {
            Pid: 504606,
            Snu: 21,
            Mo: 85,
            Pos: 5,
          },
          {
            Pid: 751202,
            Snu: 19,
            Mo: 85,
            Pos: 2,
            Fp: "2:4",
          },
          {
            Pid: 950830,
            Snu: 35,
            Pos: 5,
          },
          {
            Pid: 460632,
            Snu: 32,
            Pos: 3,
            Fp: "3:1",
          },
          {
            Pid: 121633,
            Snu: 27,
            Pos: 2,
            Fp: "2:3",
          },
          {
            Pid: 116772,
            Snu: 25,
            Pos: 3,
            Fp: "4:2",
          },
          {
            Pid: 636570,
            Snu: 2,
            Pos: 5,
          },
          {
            Pid: 724531,
            Snu: 28,
            Pos: 5,
          },
          {
            Pid: 429265,
            Snu: 29,
            Mo: 66,
            Pos: 3,
            Fp: "4:1",
          },
          {
            Pid: 385437,
            Snu: 22,
            Mo: 74,
            Pos: 3,
            Fp: "4:3",
          },
          {
            Pid: 131509,
            Pos: 10,
          },
          {
            Pid: 447084,
            Snu: 4,
            Pos: 7,
          },
          {
            Pid: 27299,
            Snu: 1,
            Pos: 1,
            Fp: "1:1",
          },
          {
            Pid: 184536,
            Snu: 10,
            Pos: 7,
          },
          {
            Pid: 94841,
            Snu: 26,
            Pos: 5,
          },
          {
            Pid: 163670,
            Snu: 14,
            Mo: 66,
            Pos: 5,
          },
          {
            Pid: 611223,
            Snu: 5,
            Pos: 2,
            Fp: "2:1",
          },
          {
            Pid: 37410,
            Snu: 8,
            Mo: 74,
            Pos: 5,
          },
          {
            Pid: 172949,
            Snu: 6,
            Mo: 74,
            Pos: 5,
          },
          {
            Pid: 343748,
            Snu: 18,
            Mo: 74,
            Pos: 3,
            Fp: "3:2",
          },
        ],
      },
      {
        Tnb: 1,
        Fo: [3, 4, 3],
        Ps: [
          {
            Pid: 487867,
            Snu: 18,
            Mo: 46,
            Pos: 5,
          },
          {
            Pid: 59595,
            Snu: 15,
            Mo: 62,
            Pos: 3,
            Fp: "3:2",
          },
          {
            Pid: 212893,
            Snu: 31,
            Mo: 76,
            Pos: 5,
          },
          {
            Pid: 66757,
            Snu: 1,
            Pos: 1,
            Fp: "1:1",
          },
          {
            Pid: 208230,
            Snu: 38,
            Mo: 46,
            Pos: 4,
            Fp: "4:1",
          },
          {
            Pid: 50638,
            Snu: 20,
            Pos: 3,
            Fp: "3:3",
          },
          {
            Pid: 857176,
            Snu: 7,
            Mo: 62,
            Pos: 5,
          },
          {
            Pid: 37374,
            Snu: 5,
            Pos: 2,
            Fp: "2:2",
          },
          {
            Pid: 693599,
            Snu: 25,
            Pos: 5,
          },
          {
            Pid: 789914,
            Snu: 12,
            Pos: 2,
            Fp: "2:3",
          },
          {
            Pid: 298823,
            Snu: 23,
            Pos: 5,
          },
          {
            Pid: 1152455,
            Snu: 27,
            Mo: 46,
            Pos: 5,
          },
          {
            Pid: 923498,
            Snu: 19,
            Pos: 4,
            Fp: "4:3",
          },
          {
            Pid: 671331,
            Snu: 9,
            Mo: 46,
            Pos: 3,
            Fp: "3:4",
          },
          {
            Pid: 243556,
            Pos: 10,
          },
          {
            Pid: 614449,
            Snu: 11,
            Mo: 46,
            Pos: 3,
            Fp: "3:1",
          },
          {
            Pid: 331540,
            Snu: 10,
            Mo: 46,
            Pos: 5,
          },
          {
            Pid: 469700,
            Snu: 4,
            Pos: 5,
          },
          {
            Pid: 269222,
            Snu: 13,
            Mo: 76,
            Pos: 4,
            Fp: "4:2",
          },
          {
            Pid: 42909,
            Snu: 28,
            Pos: 5,
          },
          {
            Pid: 128106,
            Snu: 6,
            Pos: 2,
            Fp: "2:1",
          },
          {
            Pid: 37373,
            Snu: 8,
            Pos: 7,
          },
        ],
      },
    ],
    Com: [
      {
        Txt: "Bayern Munich with a deserved victory after a fine display",
        Min: 90,
        MinEx: 5,
      },
      {
        Txt: "That's it! The referee blows the final whistle",
        Min: 90,
        MinEx: 5,
        IT: 22,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 46%, Bayern Munich: 54%.",
        Min: 90,
        MinEx: 5,
      },
      {
        Txt: "Lukas Hradecky relieves the pressure with a clearance",
        Min: 90,
        MinEx: 4,
      },
      {
        Txt:
          "Joshua Kimmich from Bayern Munich swings in the corner from the left.",
        Min: 90,
        MinEx: 4,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 90,
        MinEx: 3,
      },
      {
        Txt: "Edmond Tapsoba is penalised for pushing Robert Lewandowski",
        Min: 90,
        MinEx: 2,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 90,
        MinEx: 2,
      },
      {
        Txt:
          "The fourth official shows there are 4 minute(s) of time to be added",
        Min: 90,
        MinEx: 1,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the right side of the pitch in their own half of the field",
        Min: 90,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 48%, Bayern Munich: 52%.",
        Min: 90,
      },
      {
        Txt: "Paulinho provided the assist for the goal.",
        Min: 89,
      },
      {
        Txt: "G O O O A A A L - Florian Wirtz with the goal!",
        Min: 89,
        IT: 36,
      },
      {
        Txt: "Paulinho of Bayer Leverkusen passes the ball to a team mate.",
        Min: 89,
      },
      {
        Txt:
          "Kevin Volland of Bayer Leverkusen passes the ball to a team mate.",
        Min: 89,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 88,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in the opponent's half of the field",
        Min: 88,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 87,
      },
      {
        Txt: "Aleksandar Dragovic relieves the pressure with a clearance",
        Min: 86,
      },
      {
        Txt:
          "Great skill from Robert Lewandowski as he dribbles past his opponents",
        Min: 86,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the left side of the pitch in their own half of the field",
        Min: 85,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 49%, Bayern Munich: 51%.",
        Min: 85,
      },
      {
        Txt:
          "Alphonso Davies is leaving the field to be replaced by Lucas Hernandez in a tactical substitution.",
        Min: 85,
        IT: 3,
      },
      {
        Txt: "Sven Bender relieves the pressure with a clearance",
        Min: 84,
      },
      {
        Txt:
          "The ball is crossed into the area by Thomas Mueller from Bayern Munich ...",
        Min: 84,
      },
      {
        Txt:
          "Safe hands from Lukas Hradecky as he comes out and claims the ball",
        Min: 84,
      },
      {
        Txt:
          "The ball is crossed into the area by Ivan Perisic from Bayern Munich ...",
        Min: 84,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 83,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 82,
      },
      {
        Txt:
          "Florian Wirtz shoots from outside the box, but Manuel Neuer has it under control",
        Min: 81,
      },
      {
        Txt: "A shot by Kevin Volland is blocked",
        Min: 81,
      },
      {
        Txt: "Wendell of Bayer Leverkusen passes the ball to a team mate.",
        Min: 81,
      },
      {
        Txt: "Jerome Boateng relieves the pressure with a clearance",
        Min: 80,
      },
      {
        Txt:
          "The ball is crossed into the area by Moussa Diaby from Bayer Leverkusen ...",
        Min: 80,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 50%, Bayern Munich: 50%.",
        Min: 80,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 79,
      },
      {
        Txt: "Jerome Boateng relieves the pressure with a clearance",
        Min: 78,
      },
      {
        Txt:
          "Kerem Demirbay from Bayer Leverkusen swings in the corner from the right.",
        Min: 78,
      },
      {
        Txt:
          "Moussa Diaby forces a good save from Manuel Neuer who turns the ball behind for a corner!",
        Min: 78,
      },
      {
        Txt:
          "Moussa Diaby from Bayer Leverkusen takes the ball forward trying to make something happen...",
        Min: 78,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the left side of the pitch in the opponent's half of the field",
        Min: 77,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the left side of the pitch in the opponent's half of the field",
        Min: 77,
      },
      {
        Txt:
          "Lucas Alario is leaving the field to be replaced by Kevin Volland in a tactical substitution.",
        Min: 76,
        IT: 3,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 76,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 48%, Bayern Munich: 52%.",
        Min: 75,
      },
      {
        Txt:
          "Serge Gnabry is leaving the field to be replaced by Thiago Alcantara in a tactical substitution.",
        Min: 74,
        IT: 3,
      },
      {
        Txt:
          "Leon Goretzka is leaving the field to be replaced by Javier Martinez in a tactical substitution.",
        Min: 74,
        IT: 3,
      },
      {
        Txt:
          "After a tactical foul, Aleksandar Dragovic sees no other way than stopping the counter and receives a yellow card.",
        Min: 74,
        IT: 43,
      },
      {
        Txt:
          "Aleksandar Dragovic from Bayer Leverkusen goes a bit too far there as the pulls down Leon Goretzka",
        Min: 74,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 74,
      },
      {
        Txt: "Jerome Boateng relieves the pressure with a clearance",
        Min: 73,
      },
      {
        Txt:
          "The ball is crossed into the area by Paulinho from Bayer Leverkusen ...",
        Min: 73,
      },
      {
        Txt: "Bayer Leverkusen is trying to create something here.",
        Min: 72,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 71,
      },
      {
        Txt: "Bayer Leverkusen is trying to create something here.",
        Min: 71,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 46%, Bayern Munich: 54%.",
        Min: 70,
      },
      {
        Txt:
          "Thomas Mueller from Bayern Munich sees his pass blocked by an opponent.",
        Min: 69,
      },
      {
        Txt: "Lucas Alario is penalised for pushing Joshua Kimmich",
        Min: 69,
      },
      {
        Txt: "Jerome Boateng relieves the pressure with a clearance",
        Min: 69,
      },
      {
        Txt:
          "The ball is crossed into the area by Moussa Diaby from Bayer Leverkusen ...",
        Min: 69,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the left side of the pitch in their own half of the field",
        Min: 68,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in the opponent's half of the field",
        Min: 68,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the right side of the pitch in their own half of the field",
        Min: 67,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the right side of the pitch in their own half of the field",
        Min: 67,
      },
      {
        Txt:
          "Kingsley Coman is leaving the field to be replaced by Ivan Perisic in a tactical substitution.",
        Min: 66,
        IT: 3,
      },
      {
        Txt: "Thomas Mueller provided the assist for the goal.",
        Min: 66,
      },
      {
        Txt:
          "G O O O A A A L - Robert Lewandowski Bayern Munich scores with a header.",
        Min: 66,
        IT: 36,
      },
      {
        Txt:
          "The ball is crossed into the area by Thomas Mueller from Bayern Munich ...",
        Min: 65,
      },
      {
        Txt: "Florian Wirtz is penalised for pushing Joshua Kimmich",
        Min: 65,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 44%, Bayern Munich: 56%.",
        Min: 65,
      },
      {
        Txt: "Goal kick for Bayer Leverkusen",
        Min: 65,
      },
      {
        Txt:
          "Serge Gnabry from Bayern Munich fails to connect properly on the volley and sends the ball wide of target",
        Min: 65,
      },
      {
        Txt: "Kingsley Coman of Bayern Munich passes the ball to a team mate.",
        Min: 64,
      },
      {
        Txt:
          "Great skill from Kingsley Coman as he dribbles past his opponents",
        Min: 64,
      },
      {
        Txt:
          "The referee signals a free kick as Edmond Tapsoba from Bayer Leverkusen trips Joshua Kimmich",
        Min: 64,
      },
      {
        Txt: "Goal kick for Bayern Munich",
        Min: 64,
      },
      {
        Txt:
          "Moussa Diaby goes for goal, but his effort was never close to hitting the target.",
        Min: 63,
      },
      {
        Txt:
          "The captain is forced to give away his armband, because he is leaving the field.",
        Min: 62,
      },
      {
        Txt:
          "Julian Baumgartlinger is leaving the field to be replaced by Paulinho in a tactical substitution.",
        Min: 62,
        IT: 3,
      },
      {
        Txt:
          "Thomas Mueller sends a header towards goal, but Lukas Hradecky is there to comfortably save it",
        Min: 62,
      },
      {
        Txt:
          "Joshua Kimmich from Bayern Munich swings in the corner from the left.",
        Min: 62,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 61,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 45%, Bayern Munich: 55%.",
        Min: 60,
      },
      {
        Txt: "Lucas Alario from Bayer Leverkusen is ruled offside",
        Min: 59,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 59,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 58,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the right side of the pitch in their own half of the field",
        Min: 58,
      },
      {
        Txt:
          "The referee signals a free kick as Sven Bender from Bayer Leverkusen trips Joshua Kimmich",
        Min: 57,
      },
      {
        Txt: "Goal kick for Bayern Munich",
        Min: 56,
      },
      {
        Txt: "Robert Lewandowski relieves the pressure with a clearance",
        Min: 56,
      },
      {
        Txt:
          "Kerem Demirbay from Bayer Leverkusen swings in the corner from the right.",
        Min: 56,
      },
      {
        Txt:
          "Lucas Alario from Bayer Leverkusen heads towards goal but sees his effort blocked.",
        Min: 55,
      },
      {
        Txt:
          "The ball is crossed into the area by Moussa Diaby from Bayer Leverkusen ...",
        Min: 55,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 44%, Bayern Munich: 56%.",
        Min: 55,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the left side of the pitch in their own half of the field",
        Min: 55,
      },
      {
        Txt: "Goal kick for Bayern Munich",
        Min: 54,
      },
      {
        Txt: "Kerem Demirbay crosses the ball into the box from the free kick",
        Min: 54,
      },
      {
        Txt:
          "The referee signals a free kick as Benjamin Pavard from Bayern Munich trips Leon Bailey",
        Min: 54,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 53,
      },
      {
        Txt:
          "The referee signals a free kick as Kingsley Coman from Bayern Munich trips Julian Baumgartlinger",
        Min: 52,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 52,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 51,
      },
      {
        Txt: "Goal kick for Bayer Leverkusen",
        Min: 51,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 42%, Bayern Munich: 58%.",
        Min: 50,
      },
      {
        Txt: "Thomas Mueller sends a shot inches wide. Close!",
        Min: 50,
      },
      {
        Txt: "Kingsley Coman of Bayern Munich passes the ball to a team mate.",
        Min: 50,
      },
      {
        Txt: "Bayern Munich is having a good opportunity to score.",
        Min: 50,
      },
      {
        Txt:
          "Oh no. From a promising position Moussa Diaby from Bayer Leverkusen miskicks completely. Opportunity wasted.",
        Min: 50,
      },
      {
        Txt:
          "The ball is crossed into the area by Florian Wirtz from Bayer Leverkusen ...",
        Min: 50,
      },
      {
        Txt: "Moussa Diaby from Bayer Leverkusen is ruled offside",
        Min: 49,
      },
      {
        Txt:
          "Moussa Diaby from Bayer Leverkusen takes the ball forward trying to make something happen...",
        Min: 49,
      },
      {
        Txt:
          "Safe hands from Lukas Hradecky as he comes out and claims the ball",
        Min: 49,
      },
      {
        Txt:
          "Joshua Kimmich from Bayern Munich swings in the corner from the left.",
        Min: 48,
      },
      {
        Txt:
          "Serge Gnabry from Bayern Munich directs a ball squarely in the box, but it's intercepted by an opponent player.",
        Min: 48,
      },
      {
        Txt: "Bayern Munich is trying to create something here.",
        Min: 48,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the right side of the pitch in the opponent's half of the field",
        Min: 47,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the right side of the pitch in the opponent's half of the field",
        Min: 46,
      },
      {
        Txt:
          "Leon Bailey is leaving the field to be replaced by Wendell in a tactical substitution.",
        Min: 46,
        IT: 3,
      },
      {
        Txt:
          "Karim Bellarabi is leaving the field to be replaced by Florian Wirtz in a tactical substitution.",
        Min: 46,
        IT: 3,
      },
      {
        Txt:
          "Nadiem Amiri is leaving the field to be replaced by Kerem Demirbay in a tactical substitution.",
        Min: 46,
        IT: 3,
      },
      {
        Txt: "The second half is underway",
        Min: 46,
        IT: 12,
      },
      {
        Txt: "Bayern Munich has been the better team in this half",
        Min: 45,
        MinEx: 3,
      },
      {
        Txt: "It's over! The referee blows for half time",
        Min: 45,
        MinEx: 3,
        IT: 11,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 41%, Bayern Munich: 59%.",
        Min: 45,
        MinEx: 3,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 45,
        MinEx: 2,
      },
      {
        Txt:
          "The fourth official shows there are 2 minute(s) of time to be added",
        Min: 45,
        MinEx: 1,
      },
      {
        Txt: "Joshua Kimmich provided the assist for the goal.",
        Min: 45,
        MinEx: 1,
      },
      {
        Txt:
          "G O O O A A A L - An excellent lob by Serge Gnabry from Bayern Munich.",
        Min: 45,
        MinEx: 1,
        IT: 36,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 39%, Bayern Munich: 61%.",
        Min: 45,
      },
      {
        Txt:
          "The referee signals a free kick as Moussa Diaby from Bayer Leverkusen trips Benjamin Pavard",
        Min: 45,
      },
      {
        Txt:
          "Lukas Hradecky saved a certain goal there! Serge Gnabry found himself in a great scoring position but Lukas Hradecky denied him with a great save",
        Min: 45,
      },
      {
        Txt:
          "CHANCE! Serge Gnabry finds himself in a 1 on 1 situation with the keeper...",
        Min: 45,
      },
      {
        Txt:
          "Serge Gnabry from Bayern Munich takes the ball forward trying to make something happen...",
        Min: 45,
      },
      {
        Txt:
          "Joshua Kimmich carves the opponent's defense open with a killer through-ball",
        Min: 45,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 44,
      },
      {
        Txt: "Edmond Tapsoba relieves the pressure with a clearance",
        Min: 43,
      },
      {
        Txt:
          "The ball is crossed into the area by Kingsley Coman from Bayern Munich ...",
        Min: 43,
      },
      {
        Txt: "A wonderful team goal!",
        Min: 43,
      },
      {
        Txt: "Thomas Mueller provided the assist for the goal.",
        Min: 42,
      },
      {
        Txt: "G O O O A A A L - Leon Goretzka with the goal!",
        Min: 42,
        IT: 36,
      },
      {
        Txt:
          "Lucas Alario from Bayer Leverkusen tries to head the ball to a team mate, but it's intercepted by an opponent player.",
        Min: 41,
      },
      {
        Txt:
          "Leon Bailey from Bayer Leverkusen swings in the corner from the right.",
        Min: 41,
      },
      {
        Txt:
          "Manuel Neuer clears the danger but is forced to give away a corner...",
        Min: 41,
      },
      {
        Txt:
          "Leon Bailey from Bayer Leverkusen swings in the corner from the right.",
        Min: 41,
      },
      {
        Txt:
          "Jerome Boateng clears the danger but is forced to give away a corner...",
        Min: 41,
      },
      {
        Txt:
          "The ball is crossed into the area by Karim Bellarabi from Bayer Leverkusen ...",
        Min: 40,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 40%, Bayern Munich: 60%.",
        Min: 40,
      },
      {
        Txt:
          "The referee is not having the complaints from Thomas Mueller who is given a yellow card for dissent",
        Min: 40,
        IT: 43,
      },
      {
        Txt: "Joshua Kimmich is penalised for pushing Julian Baumgartlinger",
        Min: 40,
      },
      {
        Txt: "Goal kick for Bayer Leverkusen",
        Min: 39,
      },
      {
        Txt:
          "Space opens up for Robert Lewandowski but his finish goes wide of the target. Could have done better there.",
        Min: 39,
      },
      {
        Txt:
          "The ball is crossed into the area by David Alaba from Bayern Munich ...",
        Min: 39,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the right side of the pitch in the opponent's half of the field",
        Min: 39,
      },
      {
        Txt:
          "The referee signals a free kick as Sven Bender from Bayer Leverkusen trips Kingsley Coman",
        Min: 38,
      },
      {
        Txt:
          "Moussa Diaby shoots from outside the box, but Manuel Neuer has it under control",
        Min: 38,
      },
      {
        Txt: "Robert Lewandowski from Bayern Munich is ruled offside",
        Min: 37,
      },
      {
        Txt:
          "Kingsley Coman from Bayern Munich passes the ball in the box, but it's intercepted by an opponent player.",
        Min: 36,
      },
      {
        Txt:
          "Karim Bellarabi from Bayer Leverkusen is booked after several commited fouls.",
        Min: 35,
        IT: 43,
      },
      {
        Txt: "Karim Bellarabi is penalised for pushing Kingsley Coman",
        Min: 35,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 39%, Bayern Munich: 61%.",
        Min: 35,
      },
      {
        Txt:
          "Moussa Diaby from Bayer Leverkusen directs a ball squarely in the box, but it's intercepted by an opponent player.",
        Min: 34,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 34,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 34,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the right side of the pitch in the opponent's half of the field",
        Min: 33,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 33,
      },
      {
        Txt: "Jerome Boateng relieves the pressure with a clearance",
        Min: 33,
      },
      {
        Txt: "Leon Bailey crosses the ball into the box from the free kick",
        Min: 33,
      },
      {
        Txt:
          "The referee shows Robert Lewandowski the yellow card for unsportsmanlike conduct.",
        Min: 32,
        IT: 43,
      },
      {
        Txt:
          "Robert Lewandowski from Bayern Munich commits a foul by elbowing Sven Bender",
        Min: 32,
      },
      {
        Txt:
          "Joshua Kimmich sends a direct free kick on target, but Lukas Hradecky has it under control",
        Min: 31,
      },
      {
        Txt: "Yellow card for Nadiem Amiri",
        Min: 30,
        IT: 43,
      },
      {
        Txt:
          "Dangerous challenge by Nadiem Amiri from Bayer Leverkusen. Alphonso Davies on the receiving end of that.",
        Min: 30,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 36%, Bayern Munich: 64%.",
        Min: 30,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in the opponent's half of the field",
        Min: 30,
      },
      {
        Txt:
          "The referee signals a free kick as Charles Aranguiz from Bayer Leverkusen trips Thomas Mueller",
        Min: 29,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 28,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 28,
      },
      {
        Txt: "Leon Goretzka provided the assist for the goal.",
        Min: 27,
      },
      {
        Txt: "G O O O A A A L - Kingsley Coman with the goal!",
        Min: 27,
        IT: 36,
      },
      {
        Txt:
          "CHANCE! Kingsley Coman finds himself in a 1 on 1 situation with the keeper...",
        Min: 27,
      },
      {
        Txt:
          "Kingsley Coman from Bayern Munich takes the ball forward trying to make something happen...",
        Min: 27,
      },
      {
        Txt:
          "Could be a good chance here as Leon Goretzka from Bayern Munich cuts the opponents defense open with a through ball...",
        Min: 27,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 27,
      },
      {
        Txt:
          "Safe hands from Lukas Hradecky as he comes out and claims the ball",
        Min: 27,
      },
      {
        Txt:
          "Thomas Mueller from Bayern Munich had a bad first touch and fails to benefit from his team mates cross.",
        Min: 26,
      },
      {
        Txt: "David Alaba sends a long ball upfield.",
        Min: 26,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 26,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 33%, Bayern Munich: 67%.",
        Min: 25,
      },
      {
        Txt: "Thomas Mueller from Bayern Munich is ruled offside",
        Min: 25,
      },
      {
        Txt: "Kingsley Coman from Bayern Munich is ruled offside",
        Min: 25,
      },
      {
        Txt:
          "Oh no. From a promising position Robert Lewandowski from Bayern Munich miskicks completely. Opportunity wasted.",
        Min: 25,
      },
      {
        Txt:
          "The ball is crossed into the area by Thomas Mueller from Bayern Munich ...",
        Min: 24,
      },
      {
        Txt: "Aleksandar Dragovic relieves the pressure with a clearance",
        Min: 24,
      },
      {
        Txt:
          "The ball is crossed into the area by Alphonso Davies from Bayern Munich ...",
        Min: 24,
      },
      {
        Txt: "Bayern Munich is trying to create something here.",
        Min: 24,
      },
      {
        Txt:
          "Safe hands from Lukas Hradecky as he comes out and claims the ball",
        Min: 23,
      },
      {
        Txt:
          "The ball is crossed into the area by Thomas Mueller from Bayern Munich ...",
        Min: 23,
      },
      {
        Txt: "A shot by Joshua Kimmich is blocked",
        Min: 23,
      },
      {
        Txt: "Serge Gnabry of Bayern Munich passes the ball to a team mate.",
        Min: 23,
      },
      {
        Txt: "Great skill from Serge Gnabry as he dribbles past his opponents",
        Min: 23,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the right side of the pitch in the opponent's half of the field",
        Min: 22,
      },
      {
        Txt:
          "Benjamin Pavard from Bayern Munich directs a ball squarely in the box, but it's intercepted by an opponent player.",
        Min: 22,
      },
      {
        Txt: "Serge Gnabry of Bayern Munich passes the ball to a team mate.",
        Min: 22,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the right side of the pitch in the opponent's half of the field",
        Min: 21,
      },
      {
        Txt: "Aleksandar Dragovic relieves the pressure with a clearance",
        Min: 21,
      },
      {
        Txt:
          "The ball is crossed into the area by Kingsley Coman from Bayern Munich ...",
        Min: 21,
      },
      {
        Txt: "A shot by Kingsley Coman is blocked",
        Min: 20,
      },
      {
        Txt: "Goal kick for Bayer Leverkusen",
        Min: 20,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 38%, Bayern Munich: 62%.",
        Min: 20,
      },
      {
        Txt:
          "Joshua Kimmich from Bayern Munich crosses the ball, but it goes out for a goal kick.",
        Min: 20,
      },
      {
        Txt: "Bayern Munich is trying to create something here.",
        Min: 19,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 18,
      },
      {
        Txt:
          "The referee signals a free kick as Karim Bellarabi from Bayer Leverkusen trips Alphonso Davies",
        Min: 17,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 17,
      },
      {
        Txt: "Goal kick for Bayer Leverkusen",
        Min: 17,
      },
      {
        Txt:
          "Kingsley Coman goes for goal, but his effort was never close to hitting the target.",
        Min: 16,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 51%, Bayern Munich: 49%.",
        Min: 16,
      },
      {
        Txt: "Safe hands from Manuel Neuer as he comes out and claims the ball",
        Min: 16,
      },
      {
        Txt:
          "The ball is crossed into the area by Karim Bellarabi from Bayer Leverkusen ...",
        Min: 15,
      },
      {
        Txt:
          "Leon Goretzka sends a header towards goal, but Lukas Hradecky is there to comfortably save it",
        Min: 15,
      },
      {
        Txt:
          "Joshua Kimmich from Bayern Munich swings in the corner from the right.",
        Min: 15,
      },
      {
        Txt: "Aleksandar Dragovic relieves the pressure with a clearance",
        Min: 15,
      },
      {
        Txt:
          "The ball is crossed into the area by Thomas Mueller from Bayern Munich ...",
        Min: 15,
      },
      {
        Txt:
          "The referee signals a free kick as Karim Bellarabi from Bayer Leverkusen trips Alphonso Davies",
        Min: 15,
      },
      {
        Txt: "Robert Lewandowski relieves the pressure with a clearance",
        Min: 14,
      },
      {
        Txt:
          "Nadiem Amiri from Bayer Leverkusen swings in the corner from the left.",
        Min: 14,
      },
      {
        Txt:
          "Robert Lewandowski clears the danger but is forced to give away a corner...",
        Min: 13,
      },
      {
        Txt:
          "Nadiem Amiri from Bayer Leverkusen swings in the corner from the left.",
        Min: 13,
      },
      {
        Txt:
          "David Alaba clears the danger but is forced to give away a corner...",
        Min: 13,
      },
      {
        Txt:
          "The ball is crossed into the area by Moussa Diaby from Bayer Leverkusen ...",
        Min: 13,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the right side of the pitch in the opponent's half of the field",
        Min: 12,
      },
      {
        Txt:
          "GOAL STANDS! - After reviewing the situation, the referee decides that the goal for Bayer Leverkusen stands.",
        Min: 10,
      },
      {
        Txt:
          "VAR - GOAL! - The referee has stopped the play. VAR check in progress, pending goal situation.",
        Min: 10,
      },
      {
        Txt: "Julian Baumgartlinger provided the assist for the goal.",
        Min: 10,
      },
      {
        Txt: "G O O O A A A L - Lucas Alario with the goal!",
        Min: 10,
        IT: 36,
      },
      {
        Txt:
          "Could be a good chance here as Julian Baumgartlinger from Bayer Leverkusen cuts the opponents defense open with a through ball...",
        Min: 9,
      },
      {
        Txt:
          "Lucas Alario from Bayer Leverkusen takes the ball forward trying to make something happen...",
        Min: 9,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the left side of the pitch in the opponent's half of the field",
        Min: 9,
      },
      {
        Txt:
          "Bayer Leverkusen take a throw-in at the left side of the pitch in the opponent's half of the field",
        Min: 9,
      },
      {
        Txt: "Kingsley Coman is booked for diving",
        Min: 8,
        IT: 43,
      },
      {
        Txt:
          "NO PENALTY! The ref believes Kingsley Coman dived in the penalty box. Controversial!",
        Min: 8,
      },
      {
        Txt: "Edmond Tapsoba relieves the pressure with a clearance",
        Min: 8,
      },
      {
        Txt:
          "The ball is crossed into the area by Benjamin Pavard from Bayern Munich ...",
        Min: 7,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 7,
      },
      {
        Txt: "Ball possession: Bayer Leverkusen: 48%, Bayern Munich: 52%.",
        Min: 7,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 6,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 5,
      },
      {
        Txt:
          "Leon Bailey from Bayer Leverkusen crosses the ball, but his team mate arrives a little late and can't benefit from it.",
        Min: 5,
      },
      {
        Txt:
          "Safe hands from Lukas Hradecky as he comes out and claims the ball",
        Min: 4,
      },
      {
        Txt:
          "The ball is crossed into the area by Kingsley Coman from Bayern Munich ...",
        Min: 4,
      },
      {
        Txt: "Thomas Mueller from Bayern Munich is ruled offside",
        Min: 3,
      },
      {
        Txt: "Bayern Munich is in control of the ball.",
        Min: 2,
      },
      {
        Txt: "Lucas Alario from Bayer Leverkusen is ruled offside",
        Min: 1,
      },
      {
        Txt:
          "The pitch is in good condition today allowing for more technical play",
        Min: 1,
      },
      {
        Txt: "A perfect day for football with glorious sunshine.",
        Min: 1,
      },
      {
        Txt: "Bayer Leverkusen kick-off, and the game is underway.",
        Min: 1,
      },
      {
        Txt: "The referee starts the match",
        IT: 10,
      },
      {
        Txt: "Today's attendance is 0",
      },
      {
        Txt:
          "Welcome to today's crucial game from BayArena. We are awaiting the arrival of both teams, in anticipation of a great match!",
      },
    ],
    Prns: [
      {
        Pid: 66757,
        Fn: "Lukas",
        Ln: "Hradecky",
        Gd: 1,
      },
      {
        Pid: 93447,
        Fn: "Robert",
        Ln: "Lewandowski",
        Gd: 1,
      },
      {
        Pid: 473852,
        Fn: "Corentin",
        Ln: "Tolisso",
        Gd: 1,
      },
      {
        Pid: 751202,
        Fn: "Alphonso",
        Ln: "Davies",
        Gd: 1,
      },
      {
        Pid: 50638,
        Fn: "Charles",
        Ln: "Aranguiz",
        Gd: 1,
      },
      {
        Pid: 116772,
        Fn: "Thomas",
        Ln: "Mueller",
        Gd: 1,
      },
      {
        Pid: 131509,
        Fn: "Hans-Dieter",
        Ln: "Flick",
        Gd: 1,
      },
      {
        Pid: 857176,
        Nm: "Paulinho",
        Gd: 1,
      },
      {
        Pid: 693599,
        Fn: "Exequiel",
        Ln: "Palacios",
        Gd: 1,
      },
      {
        Pid: 923498,
        Fn: "Moussa",
        Ln: "Diaby",
        Gd: 1,
      },
      {
        Pid: 298823,
        Fn: "Mitchell",
        Ln: "Weiser",
        Gd: 1,
      },
      {
        Pid: 789914,
        Fn: "Edmond",
        Ln: "Tapsoba",
        Gd: 1,
      },
      {
        Pid: 1152455,
        Fn: "Florian",
        Ln: "Wirtz",
        Gd: 1,
      },
      {
        Pid: 184536,
        Fn: "Philippe",
        Ln: "Coutinho",
        Gd: 1,
      },
      {
        Pid: 671331,
        Fn: "Leon",
        Ln: "Bailey",
        Gd: 1,
      },
      {
        Pid: 94841,
        Fn: "Sven",
        Ln: "Ulreich",
        Gd: 1,
      },
      {
        Pid: 163670,
        Fn: "Ivan",
        Ln: "Perisic",
        Gd: 1,
      },
      {
        Pid: 243556,
        Fn: "Peter",
        Ln: "Bosz",
        Gd: 1,
      },
      {
        Pid: 611223,
        Fn: "Benjamin",
        Ln: "Pavard",
        Gd: 1,
      },
      {
        Pid: 37410,
        Fn: "Javier",
        Ln: "Martinez",
        Gd: 1,
      },
      {
        Pid: 469700,
        Fn: "Jonathan",
        Ln: "Tah",
        Gd: 1,
      },
      {
        Pid: 172949,
        Fn: "Thiago",
        Ln: "Alcantara",
        Gd: 1,
      },
      {
        Pid: 128106,
        Fn: "Aleksandar",
        Ln: "Dragovic",
        Gd: 1,
      },
      {
        Pid: 343748,
        Fn: "Leon",
        Ln: "Goretzka",
        Gd: 1,
      },
      {
        Pid: 59595,
        Fn: "Julian",
        Ln: "Baumgartlinger",
        Gd: 1,
      },
      {
        Pid: 212893,
        Fn: "Kevin",
        Ln: "Volland",
        Gd: 1,
      },
      {
        Pid: 36183,
        Fn: "Jerome",
        Ln: "Boateng",
        Gd: 1,
      },
      {
        Pid: 504606,
        Fn: "Lucas",
        Ln: "Hernandez",
        Gd: 1,
      },
      {
        Pid: 950830,
        Fn: "Joshua",
        Ln: "Zirkzee",
        Gd: 1,
      },
      {
        Pid: 460632,
        Fn: "Joshua",
        Ln: "Kimmich",
        Gd: 1,
      },
      {
        Pid: 121633,
        Fn: "David",
        Ln: "Alaba",
        Gd: 1,
      },
      {
        Pid: 37374,
        Fn: "Sven",
        Ln: "Bender",
        Gd: 1,
      },
      {
        Pid: 636570,
        Fn: "Alvaro",
        Ln: "Odriozola",
        Gd: 1,
      },
      {
        Pid: 724531,
        Fn: "Sarpreet",
        Ln: "Singh",
        Gd: 1,
      },
      {
        Pid: 429265,
        Fn: "Kingsley",
        Ln: "Coman",
        Gd: 1,
      },
      {
        Pid: 385437,
        Fn: "Serge",
        Ln: "Gnabry",
        Gd: 1,
      },
      {
        Pid: 447084,
        Fn: "Niklas",
        Ln: "Suele",
        Gd: 1,
      },
      {
        Pid: 27299,
        Fn: "Manuel",
        Ln: "Neuer",
        Gd: 1,
      },
      {
        Pid: 614449,
        Fn: "Nadiem",
        Ln: "Amiri",
        Gd: 1,
      },
      {
        Pid: 331540,
        Fn: "Kerem",
        Ln: "Demirbay",
        Gd: 1,
      },
      {
        Pid: 208230,
        Fn: "Karim",
        Ln: "Bellarabi",
        Gd: 1,
      },
      {
        Pid: 269222,
        Fn: "Lucas",
        Ln: "Alario",
        Gd: 1,
      },
      {
        Pid: 487867,
        Nm: "Wendell",
        Gd: 1,
      },
      {
        Pid: 42909,
        Fn: "Ramazan",
        Ln: "Oezcan",
        Gd: 1,
      },
      {
        Pid: 37373,
        Fn: "Lars",
        Ln: "Bender",
        Gd: 1,
      },
    ],
    EO: 17211,
    Stg: {
      Cid: 25,
      Ccd: "germany",
      Cnm: "Germany",
      Chi: 0,
      Ccntr: 1,
      Clive: 1,
      Sid2: 205,
      Scd: "bundesliga",
      Sdn: "Bundesliga",
      Snm: "Bundesliga",
      Ssm: 747,
      Scu: 0,
      SmCLT: 747,
      Slive: 1,
      Ses: 306,
      Spps: 18,
    },
  },
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
