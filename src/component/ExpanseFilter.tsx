interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpanseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select w-25"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="">All</option>
      <option value="false">Incomplete</option>
      <option value="true">Complete</option>
    </select>
  );
};

export default ExpanseFilter;
