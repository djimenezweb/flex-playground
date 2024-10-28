import { flexProperties } from "../../../config/flex-properties";
import { getOneValueSyntaxString } from "../../../utils/flex-shorthand";

const Line = ({ property, value }) => {
  let flexShorthand = "";
  property === "flex" && (flexShorthand = getOneValueSyntaxString(value));

  return (
    <>
      <br />
      <span className="line">
        <span>{"  "}</span>
        <span className="property">{flexProperties[property].cssName}</span>
        <span>:</span> <span className="value">{flexShorthand || value}</span>
        <span>;</span>
      </span>
    </>
  );
};
export default Line;
