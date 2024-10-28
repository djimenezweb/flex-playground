const TextContent = ({ content, handleContent }) => {
  function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.content.value;
    handleContent(value);
    e.target.reset();
  }

  return (
    <div className="property__container">
      <h3 className="property__title property__title--serif">Text content</h3>

      <form onSubmit={handleSubmit}>
        <input
          className="content-input"
          key={content}
          size={1}
          type="text"
          name="content"
          id="content"
          defaultValue={content}
          placeholder={!content ? "Insert text" : ""}
          onBlur={(e) => e.target.form.requestSubmit()}
        />
      </form>
    </div>
  );
};
export default TextContent;
