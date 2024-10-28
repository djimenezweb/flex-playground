import { useMenu } from "../providers/menu/useMenu";

const Logo = () => {
  const { handleMenuScreen, menuScreen } = useMenu();

  function handleClick(e) {
    e.stopPropagation();
    handleMenuScreen("about");
  }

  return (
    <h1
      className={menuScreen === "about" ? "logo logo--active" : "logo"}
      onClick={(e) => handleClick(e)}
    >
      <span className="logo__first-word"> flex </span>
      <span className="logo__second-word"> Playground </span>
    </h1>
  );
};
export default Logo;
