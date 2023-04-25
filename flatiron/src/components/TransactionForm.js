import React, { useState } from 'react';

function TransactionForm(props) {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount)
    };

    props.addTransaction(newTransaction);
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} />
      <label htmlFor="description">Description</label>
      <input type="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} />
      <label htmlFor="category">Category</label>
      <input type="text" id="category" value={category} onChange={(event) => setCategory(event.target.value)} />
      <label htmlFor="amount">Amount</label>
      <input type="text" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;