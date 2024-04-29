import { Checkbox, Text } from "@chakra-ui/react";

export interface Expense {
  id: number;
  title: string;
  description: string;
  mark: boolean;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
  onChange: (id: number) => void;
}

const ExpanseList = ({ expenses, onDelete, onChange }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Description</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>
              <Checkbox
                isChecked={expense.mark}
                onChange={() => onChange(expense.id)}
                textTransform="capitalize"
              ></Checkbox>
            </td>
            <td>
              {expense.mark ? (
                <Text as="s">{expense.title}</Text>
              ) : (
                <Text>{expense.title}</Text>
              )}
            </td>
            <td>
              {expense.mark ? (
                <Text as="s">{expense.description}</Text>
              ) : (
                <Text>{expense.description}</Text>
              )}
            </td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      {/* <tfoot>
      </tfoot> */}
    </table>
  );
};

export default ExpanseList;
