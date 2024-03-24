import {useState} from "react";

interface props {
    onSubmit: (object: {}) => void;

}

const Form = ({onSubmit}: props) => {
    let [expense, setExpense] = useState({desc: "Laptop", amount: 0, category: "Mobile"});
    let handleSubmit = (event: PointerEvent) => {
        event.preventDefault();
        onSubmit(expense);

    };
    return (
        <>
            <div className={"mb-3"}>
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="desc">Description</label>
                        <input id="desc" value={expense.desc} onChange={(event) => {
                            setExpense({...expense, desc: event.target.value});
                        }} className="form-control" type="text"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="amount">Amount</label>
                        <input id="amount" value={expense.amount} onChange={(event) => {
                            setExpense({...expense, amount: event.target.value});
                        }} className="form-control" type="number"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select id="category" value={expense.category} onChange={ (event) => {
                            setExpense({...expense, category: event.target.value});
                        }} className="form-control">
                            <option value="Groceries">Groceries</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Mobile">Mobile & Gadgets</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit
                    </button>
                </form>
            </div>
        </>

    )
};

export default Form;