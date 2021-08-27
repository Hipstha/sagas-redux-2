import { useState } from 'react';
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

  const [ entries, setEntries ] = useState( initialEntries );

  const deleteEntry = (id) => {
    const result = entries.filter( entry => entry.id !== id );
    setEntries(result);
  }

  const addEntry = (description, value, isExpense) => {
    const result = entries.concat({ id: entries.length+1, description, value, isExpense });
    setEntries(result);
  }

  const editEntry = (id) => {
    console.log(id);
    if ( id ) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setDescription(entry.description);
      setValue( entry.value );
      setIsExpense( entry.isExpense );
      setIsOpen( true );
    }
  }

  return (
    <Container>

      <MainHeader title="Budget" />

      <DisplayBalance title="Your Balance:"
                      value="2,500.20"
                      size="small"
      />
      
      <DisplayBalances />

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
                 isEspense={isExpense}
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
    value: '$1000',
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20",
    isExpense: true
  },
  {
    id: 3,
    description: 'Rent',
    value: '$200',
    isExpense: true
  },
  {
    id: 4,
    description: 'Power Bill',
    value: '$50',
    isExpense: true
  }
];