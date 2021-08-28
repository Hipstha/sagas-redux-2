export const modalTypes = {
  OPEN_EDIT_MODAL:'OPEN_EDIT_MODAL',
  CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL'
}

export const openEditModal = ( id ) => (
  {
    type: modalTypes.OPEN_EDIT_MODAL,
    payload: {id}
  }
)

export const closeEditModal = () => (
  {
    type: modalTypes.CLOSE_EDIT_MODAL
  }
)