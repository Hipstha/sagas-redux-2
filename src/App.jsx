import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';

// components
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import MainHeader from './components/MainHeader';
import ModalEdit from './components/ModalEdit';
import NewEntryForm from './components/NewEntryForm';

function App() {

  const [ description, setDescription ] = useState('');
  const [ value, setValue ] = useState('');
  const [ isExpense, setIsExpense ] = useState( false );
  const [ isOpen, setIsOpen ] = useState( false );
  const [ entryId, setEntryId ] = useState();
  const [ entries, setEntries ] = useState( initialEntries );
  const [ incomeTotal, setIncomeTotal ] = useState(0);
  const [ expensesTotal, setExpensesTotal ] = useState(0);
  const [ total, setTotal ] = useState(0);

  useEffect(() => {
    if ( !isOpen && entryId ) {
      const index = entries.findIndex( (entry) => entry.id === entryId );
      const newEntries = [...entries];
      newEntries[ index ].description = description;
      newEntries[ index ].value = value;
      newEntries[ index ].isExpense = isExpense;
      setEntries( newEntries );
      resetEntry();
    }
  }, [ isOpen ]);

  useEffect(() => {

    let totalIncomes = 0;
    let totalExpenses = 0;

    entries.map((entry) => {
      if( entry.isExpense ) {
        return totalExpenses += Number(entry.value);
      } else {
        return totalIncomes += Number(entry.value);
      }
    });
    setTotal( totalIncomes - totalExpenses )
    setExpensesTotal( totalExpenses );
    setIncomeTotal( totalIncomes )
  }, [entries] );


  const deleteEntry = (id) => {
    const result = entries.filter( entry => entry.id !== id );
    setEntries(result);
  }

  const addEntry = () => {
    const result = entries.concat({ id: entries.length+1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }

  const editEntry = (id) => {
    if ( id ) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId( id );
      setDescription(entry.description);
      setValue( entry.value );
      setIsExpense( entry.isExpense );
      setIsOpen( true );
    }
  }

  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense( false );
  }

  return (
    <Container>

      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance:"
                      value={ total }
                      size="small"
      />
      
      <DisplayBalances incomeTotal={ incomeTotal } expensesTotal={ expensesTotal } />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} 
                  deleteEntry={deleteEntry} 
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  editEntry={editEntry}
      />


      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm addEntry={addEntry} 
                    description={description}
                    value={value}
                    isEspense={isExpense}
                    setDescription={setDescription}
                    setValue={setValue}
                    setIsExpense={setIsExpense}
      />

      <ModalEdit description={description}
                 value={value}
                 isExpense={isExpense}
                 setDescription={setDescription}
                 setValue={setValue}
                 setIsExpense={setIsExpense}
                 isOpen={ isOpen } 
                 setIsOpen={ setIsOpen } 
      />

    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: 'Work income',
    value: 1000,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
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