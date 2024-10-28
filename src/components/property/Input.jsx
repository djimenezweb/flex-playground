import { useId } from "react";
import { getInputClassName } from "../../utils/get-input-classname";

const Input = ({ property, type, handleUpdate, currentValues }) => {
  const id = useId();

  const { isActive, isMultiple, flex } = getInputClassName(
    type,
    property,
    currentValues
  );

  let className = "css-value-input";
  isActive && (className += " active");
  isActive && isMultiple && (className += " active--multiple");

  let placeholder = `<${type}>`;
  isActive && !isMultiple && (placeholder = "");

  let defaultValue = "";
  isActive && !isMultiple && (defaultValue = flex || currentValues[0]);

  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target[id].value.trim();
    if (value === "") return;
    if (type === "number" && isNaN(value)) return;
    if (type !== "number" && Number(value)) {
      handleUpdate(property, `${value}px`);
    } else {
      handleUpdate(property, value);
    }
    e.target.reset();
  }

  function handleBlur(e) {
    e.target.form.requestSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        key={`${currentValues[0]}`}
        className={className}
        size={type.length + 2}
        type="text"
        name={property}
        id={id}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={handleBlur}
      />
    </form>
  );
};
export default Input;
