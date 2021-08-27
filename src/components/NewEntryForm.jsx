import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

import useEntryDetails from '../hooks/useEntryDetails';

const NewEntryForm = () => {

  const {
    description, setDescription, value, setValue, isExpense, setIsExpense, addEntry
  } = useEntryDetails();

  return (
    <Form unstackable>
        <EntryForm addEntry={addEntry} 
                   description={description}
                   value={value}
                   isEspense={isExpense}
                   setDescription={setDescription}
                   setValue={setValue}
                   setIsExpense={setIsExpense}
        />

        <ButtonSaveOrCancel addEntry={addEntry}                            
        />
        
      </Form>
  );
};

export default NewEntryForm;