const Selector = ({ selector, children }) => {
  return (
    <>
      <span className="line">
        <span className="selector">{selector}</span>
        <span className="braces">{" {"}</span>
      </span>
      {children}
      <br />
      <span className="line">
        <span className="braces">{"}"}</span>
      </span>
      <span className="line"></span>
      <br />
      <br />
    </>
  );
};
export default Selector;
