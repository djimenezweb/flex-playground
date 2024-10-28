const Button = ({ children, isActive, isMultiple, onClick }) => {
  let className = "css-value-button";
  isActive && (className += " active");
  isActive && isMultiple && (className += " active--multiple");

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
