import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);

  const [filteredTransactions, setFilteredTransactions] = useState([]);


  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    fetch('http://localhost:3000/transactions')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);




  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

 

  const filtered = Array.isArray(filteredTransactions) ? filteredTransactions.filter(transaction => {
    return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
  }) : [];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase())
    setFilteredTransactions(filtered);
  };

  console.log(filteredTransactions);


  return (
    <div>
      <TransactionForm addTransaction={addTransaction} />
      <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search transactions" />
      <TransactionTable filteredTransactions={filteredTransactions} />
    </div>
  );
}



export default App;