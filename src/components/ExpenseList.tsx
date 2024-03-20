interface props {
    expenseList: string[];
}
let list = ["abc", "def"];
const ExpenseList = ({expenseList}: props) => {
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

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col" >Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>

                <tr>
                    <td>Milk</td>
                    <td>$5.00</td>
                    <td>Groceries</td>
                    <td><button className="btn btn-outline-danger">Delete</button></td>
                </tr>

                </tbody>
            </table>
        </>
    );
};

export default ExpenseList;