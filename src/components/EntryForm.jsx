import React, { Fragment } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';

const EntryForm = ({ description, value, setDescription, setValue, setIsExpense, isExpense }) => {
  return (
    <Fragment>
      <Form.Group>
        <Form.Input icon="tags"
                    width={12}
                    label="Description"
                    placeholder="New shinny thing" 
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
        />
        <Form.Input width={4}
                    label="Value"
                    placeholder="100.00"
                    icon="dollar"
                    iconPosition="left"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
        />
      </Form.Group>

      <Segment compact>
        <Checkbox toggle 
                  label="Is expense" 
                  checked={isExpense} 
                  onChange={() => setIsExpense(oldState => !oldState)}
        />
      </Segment>
      
    </Fragment>
  );
};

export default EntryForm;