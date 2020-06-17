import { getMatchDetails as getMatchDetailsAPI } from "../../services/livescoreAPIs";
import { triggerShowInAZone } from "../../services/landmarkAPIs";
export const SET_COMMENTARY_ENTRY = "SET_COMMENTARY_ENTRY";

export function setCommentaryEntry(eventId, CommentaryEntry) {
  return {
    type: SET_COMMENTARY_ENTRY,
    eventId,
    CommentaryEntry,
  };
}

export function getCommentaryEntries(eventId) {
  return (dispatch, getState) => {
    const entries = getState().events.eventsCollactions[eventId].Com;
    const token = getState().eventsDetails.landMarkAccessToken;
    entries.reverse();
    let waitTime = 1;
    console.log("entries.length : ", entries.length);
    for (let i = 0; i < entries.length; i++) {
      if (i > 0 && entries[i - 1].IT) {
        if (entries[i - 1].IT === 36) {
          // Goal
          waitTime = waitTime + 1;
        } else if (entries[i - 1].IT == 43) {
          // Yellow card
          waitTime = waitTime + 1;
        } else if (entries[i - 1].IT == 77) {
          // Yellow card
          waitTime = waitTime + 1;
        }
      }
      setTimeout(() => {
        console.log("entry : ", entries[i].Txt);
        dispatch(setCommentaryEntry(eventId, entries[i]));
        if (entries[i].IT === 36) {
          // Goal
          triggerShowInAZone(token, "1E294B387", 3, 158);
        } else if (entries[i].IT == 43) {
          // Yellow card
          triggerShowInAZone(token, "1E294B387", 3, 160);
        } else if (entries[i].IT == 77) {
          triggerShowInAZone(token, "1E294B387", 3, 159);
        }
      }, i * waitTime * 3000);
    }
  };

  function ss() {
    [
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
        Txt: "Paulinho provided the assist for the goal.",
        Min: 89,
      },
      {
        Txt: "G O O O A A A L - Florian Wirtz with the goal!",
        Min: 89,
        IT: 36,
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
        Txt: "Red card for Nadiem Amiri",
        Min: 80,
        IT: 77,
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
          "After a tactical foul, Aleksandar Dragovic sees no other way than stopping the counter and receives a yellow card.",
        Min: 74,
        IT: 43,
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
          "G O O O A A A L - Robert Lewandowski Bayern Munich scores with a header.",
        Min: 66,
        IT: 36,
      },
      {
        Txt: "Bayer Leverkusen is in control of the ball.",
        Min: 53,
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
        Txt:
          "G O O O A A A L - An excellent lob by Serge Gnabry from Bayern Munich.",
        Min: 45,
        MinEx: 1,
        IT: 36,
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
        Txt:
          "The ball is crossed into the area by David Alaba from Bayern Munich ...",
        Min: 39,
      },
      {
        Txt:
          "Karim Bellarabi from Bayer Leverkusen is booked after several commited fouls.",
        Min: 35,
        IT: 43,
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
        //start
        Txt:
          "Dangerous challenge by Nadiem Amiri from Bayer Leverkusen. Alphonso Davies on the receiving end of that.",
        Min: 30,
      },
      {
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 28,
      },
      {
        //end
        Txt: "Leon Goretzka provided the assist for the goal.",
        Min: 27,
      },
      {
        Txt: "G O O O A A A L - Kingsley Coman with the goal!",
        Min: 27,
        IT: 36,
      },
      {
        //start
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
        //end
        Txt:
          "Bayern Munich take a throw-in at the left side of the pitch in their own half of the field",
        Min: 5,
      },
      {
        Txt: "G O O O A A A L - Lucas Alario with the goal!",
        Min: 10,
        IT: 36,
      },
      {
        //
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
        Txt: "A perfect day for football with glorious sunshine.",
        Min: 1,
      },
      {
        Txt:
          "Welcome to today's crucial game from BayArena. We are awaiting the arrival of both teams, in anticipation of a great match!",
      },
    ];
  }
}
