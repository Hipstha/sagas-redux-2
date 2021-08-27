import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

const NewEntryForm = ({ addEntry, description, value, setDescription, setValue, setIsExpense, isExpense }) => {

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
                            description={ description } 
                            value={value}
                            isExpense={isExpense}                             
        />
        
      </Form>
  );
};

export default NewEntryForm;