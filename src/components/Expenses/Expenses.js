import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const defaultYear = "2020";

  const [filteredYear, setFilteredYear] = useState(defaultYear);

  const selectFilterHandler = (filterSelection) => {
    setFilteredYear(filterSelection);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onSelectFilter={selectFilterHandler} selectedValue={filteredYear} />
      <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date} />
      <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date} />
      <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date} />
      <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date} />
    </Card>
  );
};

export default Expenses;