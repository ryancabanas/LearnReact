import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Set some default state values.
  const defaultTitle = "";
  const defaultAmount = "";
  const defaultDate = "";

  // Create states
  const [enteredTitle, setEnteredTitle] = useState(defaultTitle);
  const [enteredAmount, setEnteredAmount] = useState(defaultAmount);
  const [enteredDate, setEnteredDate] = useState(defaultDate);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    // Prevent form from reloading on "Submit"
    event.preventDefault();

    // Store state values in an object.
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    // Call the parent function
    props.onSaveExpenseData(expenseData);

    // Reset states back to default values after "Submit"
    setEnteredTitle(defaultTitle);
    setEnteredAmount(defaultAmount);
    setEnteredDate(defaultDate);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-epense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form >
  );
};

export default ExpenseForm;