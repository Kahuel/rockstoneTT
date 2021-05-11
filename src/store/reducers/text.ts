export const text = (
  store: string[] = [],
  action: { type: string; payload: { newText: string } }
) => {
  switch (action.type) {
    case "ADD_NEW_TEXT": {
      const { newText } = action.payload;
      return [...store, newText];
    }
    default: {
      return store;
    }
  }
};
