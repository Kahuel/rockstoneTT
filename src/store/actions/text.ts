export const addText = (newText: string) => ({
  type: "ADD_NEW_TEXT",
  payload: {
    newText,
  },
});
