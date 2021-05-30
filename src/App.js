import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 5, 26) },
    { title: 'New Shoes', amount: 100.99, date: new Date(2021, 3, 22) },
    { title: 'New Monitor', amount: 400.99, date: new Date(2021, 1, 12) },
  ];

  return (
    <>
      <h1>Let's get Started</h1>
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
