const Title = ({ name, value, mixed }) => {
  return (
    <h3 className="property__title">
      <span className="property__title__name">{name}:</span>
      {!mixed && <span className="property__title__value">{value}</span>}
      {mixed && <span className="property__title__value--mixed">mixed</span>}
    </h3>
  );
};
export default Title;
