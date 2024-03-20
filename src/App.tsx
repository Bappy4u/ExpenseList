import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList"
import {useState} from "react";


function App() {
    const [expenseList, setExpenseList] = useState([{desc: "Iphone 14 pro", price: 1100, category:"Mobile & Gadgets"}]);
    return  (
        <div className="container">
            <h1>Expense List</h1>
            <div className="mb-4"></div>
            <Form/>
            <div className="mb-5"></div>
            <ExpenseList expenseList={expenseList}></ExpenseList>
        </div>

    )
}

export default App
