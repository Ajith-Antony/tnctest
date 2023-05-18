const defaultState = {
  students: [
    {
      name: "Rahul",
      adress: "adress",
      age: "12",
      id: "1",
    },
    {
      name: "Arj",
      adress: "adress",
      age: "12",
      id: "2",
    },
  ],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_STUDENT":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
