interface props {
    expenseList: string[];
    onDelete: (index: number) => void;
}

let list = ["abc", "def"];
const ExpenseList = ({expenseList, onDelete}: props) => {

    return (
        <>
            <div className="mb-5">
                <select id="category" className="form-control">
                    <option value="All">All categories</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Mobile">Mobile & Gadgets</option>
                    <option value="Electronics">Electronics</option>
                </select>
            </div>

            {expenseList.length < 1 && <p>There is no expenses yet</p>}

            {expenseList.length > 0 && <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>

                {expenseList.map((item, index) => (
                    item.category === "Mobile & Gadgets" &&
                    <tr key={index}>
                        <td>{item.desc}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>
                            <button className="btn btn-outline-danger"
                                    onClick={() => onDelete(index)}>Delete
                            </button>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>
            }
        </>
    );
};

export default ExpenseList;