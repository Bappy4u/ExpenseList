import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList"


function App() {
    return  (
        <div className="container">
            <h1>Expense List</h1>
            <div className="mb-4"></div>
            <Form/>
            <div className="mb-5"></div>
            <ExpenseList></ExpenseList>
        </div>

    )
}

export default App
