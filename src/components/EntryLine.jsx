import React from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

const EntryLine = ({ id, description, value, isExpense = false, deleteEntry, setIsOpen, editEntry }) => {

  

  return (
    <>
      <Segment color={ isExpense ? 'red' : 'green' }>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column textAlign="left" width={10}>
              { description }
            </Grid.Column>
            <Grid.Column textAlign="right" width={3}>
              { value }
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => editEntry( id )} />
              <Icon name="trash" bordered onClick={ () => deleteEntry( id ) } />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;