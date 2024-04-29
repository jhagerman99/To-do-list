import { useEffect, useState } from "react";
import "./App.css";
import Expanse from "./component/Expanse";
import ExpanseFilter from "./component/ExpanseFilter";
import ExpanseList from "./component/ExpanseList";
import { useLocalStorage } from "./component/useLocalStorage";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Progamming",
      description: "make to-do list aplication with React typscript",
      mark: false,
    },
  ]);
  const { setItem, getItem } = useLocalStorage("expenses");

  //Init value
  {
    useEffect(() => {
      setExpenses(getItem());
    }, []);
  }

  //Update local storage
  {
    useEffect(() => {
      if (expenses.length !== 0) {
        setItem(expenses);
        console.log(getItem());
      }
    }, [expenses]);
  }

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.mark == JSON.parse(selectedCategory))
    : expenses;

  return (
    <>
      <div className="mb-3">
        <ExpanseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>

      <div className="mb-5">
        <ExpanseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
          onChange={(id) =>
            setExpenses(
              expenses.map((check) =>
                check.id === id ? { ...check, mark: !check.mark } : check
              )
            )
          }
        />
      </div>

      <div>
        <Expanse
          onSubmit={(expense) => {
            setExpenses([
              ...expenses,
              {
                id: expenses.length + 1,
                ...expense,
                mark: false,
              },
            ]);
          }}
        />
      </div>
    </>
  );
};
export default App;
