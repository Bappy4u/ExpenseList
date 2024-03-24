import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList"
import {useState} from "react";


function App() {

    const [expenseList, setExpenseList] = useState([{
        desc: "Iphone 14 pro",
        amount: 1100,
        category: "Mobile & Gadgets"
    }]);

    const onExpenseSubmit = (expense: object) => {
        const updatedExpenseList = [...expenseList, expense];
        setExpenseList(updatedExpenseList);

    };
    const handleDelete = (index: number) => {
        setExpenseList(expenseList => expenseList.filter((_, i) => i !== index));
    };


    return (
        <div className="container">
            <h1>Expense List</h1>
            <div className="mb-4"></div>
            <Form onSubmit={onExpenseSubmit}/>
            <div className="mb-5"></div>
            <ExpenseList expenseList={expenseList} onDelete={handleDelete}></ExpenseList>
        </div>

    )
}

export default App
