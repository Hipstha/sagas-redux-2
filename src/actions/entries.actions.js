// ACTION

export const entriesTypes = {
  GET_ENTRIES: 'GET_ENTRIES',
  POPULATE_ENTRIES: 'POPULATE_ENTRIES',
  POPULATE_ENTRY_DETAILS: 'POPULATE_ENTRY_DETAILS',
  ADD_ENTRY: 'ADD_ENTRY',
  REMOVE_ENTRY: 'REMOVE_ENTRY',
  REMOVE_ENTRY_RESULT: 'REMOVE_ENTRY_RESULT',
  UPDATE_ENTRY: 'UPDATE_ENTRY'
}

export const addEntryRedux = (payload) => (
  {type: entriesTypes.ADD_ENTRY, payload: payload }
);

export const removeEntryRedux = (id) => (
  { type: entriesTypes.REMOVE_ENTRY, payload: id } 
);

export const updateEntryRedux = (id, entry) => (
  {
    type: entriesTypes.UPDATE_ENTRY,
    payload: {
      id, entry
    }
  }
);

export const getAllEntries = () => {
  return { type: entriesTypes.GET_ENTRIES }
}

export const populateEntries = (entries) => {
  return {
    type: entriesTypes.POPULATE_ENTRIES,
    payload: entries
  };
};

export const populateEntryDetail = ( id, entry ) => {
  return {
    type: entriesTypes.POPULATE_ENTRY_DETAILS,
    payload: { id, entry }
  }
}