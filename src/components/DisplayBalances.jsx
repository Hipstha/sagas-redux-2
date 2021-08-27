import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ incomeTotal, expensesTotal }) => {
  return (
    <Segment textAlign="center">
      <Grid columns={ 2 } divided>
        <Grid.Row>

          <Grid.Column>
            <DisplayBalance title="Income"
                            value={ incomeTotal }
                            color="green"
            />
          </Grid.Column>

          <Grid.Column>
            <DisplayBalance title="Expenses"
                            value={ expensesTotal }
                            color="red"
            />
          </Grid.Column>

        </Grid.Row>
      </Grid>
    </Segment>
  )
};

export default DisplayBalances;