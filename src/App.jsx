import { Container } from 'semantic-ui-react';
import './App.css';

// components
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>

      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance:"
                      value="2,500.20"
                      size="small"
      />
      
      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="Income"
                 value="$10,00"
      />

      <EntryLine description="Expense"
                 value="$15,00"
                 isExpense
      />

      <EntryLine description="Income"
                 value="$10,00"
      />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />

    </Container>
  );
}

export default App;
