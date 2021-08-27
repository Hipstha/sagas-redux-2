import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import EntryForm from './EntryForm';

const ModalEdit = ({ isOpen, setIsOpen, addEntry, description, value, setDescription, setValue, setIsExpense, isExpense }) => {
  return(
    <Modal open={isOpen}>
      <Modal.Header>
        Edit entry
      </Modal.Header>

      <Modal.Content>
        <EntryForm addEntry={addEntry} 
                   description={description}
                   value={value}
                   isExpense={isExpense}
                   setDescription={setDescription}
                   setValue={setValue}
                   setIsExpense={setIsExpense}
        />
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setIsOpen(false) }>Close</Button>
        <Button onClick={() => setIsOpen(false)} primary> Ok </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalEdit;