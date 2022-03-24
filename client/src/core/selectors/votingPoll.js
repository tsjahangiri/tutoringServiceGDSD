export const getSaveAlert = (state: Object) => {
  return state.poll.saveAlert;
};

export const getUpdateAlert = (state: Object) => state.poll.updateAlert;

export const getPollById = (state: Object) => state.poll.data;
