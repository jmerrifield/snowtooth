export default {
  accessedByLifts: (parent, args, { lifts }) =>
    parent.lift.map(id => lifts.find(l => id === l.id)),

  newDifficulty: ({ difficulty }) => {
    switch(difficulty) {
    case "beginner":
      return "GREEN";
      
    case "intermediate":
      return "BLUE";
    

    case "advanced":
    return "BLUE_DIAMOND";

    case "expert":
      return "BLACK_DIAMOND";

    default:
      throw new Error();
    }
  }
};
