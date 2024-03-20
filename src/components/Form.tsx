const Form = () => {
    return (
        <>
            <div className={"mb-3"}>
                <form action="">
                    <div className="mb-3">
                        <label className="form-label" htmlFor="desc">Description</label>
                        <input id="desc" className="form-control" type="text"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="amount">Amount</label>
                        <input id="amount" className="form-control" type="text"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select id="category" className="form-control">
                            <option value="Groceries">Groceries</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Mobile">Mobile & Gadgets</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>

    )
};

export default Form;