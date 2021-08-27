export const openEditModal = ( id ) => (
  {
    type: 'OPEN_EDIT_MODAL',
    payload: {id}
  }
)

export const closeEditModal = () => (
  {
    type: 'CLOSE_EDIT_MODAL'
  }
)