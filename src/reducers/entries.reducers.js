// REDUCER
const reducer = ( state = initialEntries, action ) => {
  let newEntries;
  switch ( action.type ) {
    
    case 'ADD_ENTRY':
      newEntries = state.concat({ ...action.payload });
      return newEntries;
    
    case 'REMOVE_ENTRY':
      newEntries = state.filter( entry => entry.id !== action.payload );
      return newEntries;

    case 'UPDATE_ENTRY':
      newEntries = [...state];
      const index = newEntries.findIndex( entry => entry.id === action.payload.id );
      newEntries[index] = { ...action.payload.entry }
      return newEntries;

    default:
      return state;
  }
}
// REDUCER END

export default reducer;

var initialEntries = [
  {
    id: 1,
    description: 'Work income Redux',
    value: 1000,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill Redux",
    value: 20,
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: 200,
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: 50,
    isExpense: true
  }
];