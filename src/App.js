import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/ExpenseInput/NewExpense';

function App() {
    const expenses = [
        { id: 1, title: 'Car Insurance', amount: 294.67, date: new Date(2021, 5, 26) },
        { id: 2, title: 'New Shoes', amount: 100.99, date: new Date(2021, 3, 22) },
        { id: 3, title: 'New Monitor', amount: 400.99, date: new Date(2021, 1, 12) },
    ];

    return (
        <>
            <NewExpense/>
            <Expenses expenses={ expenses }/>
        </>
    );
}

export default App;
