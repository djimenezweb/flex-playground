// Accepts a three-value syntax string: '0 1 auto', '1 2 120px', etc.
// Returns a one-value syntax string:
//   - the keywords 'initial', 'auto', or 'none'
//   - the flex-grow value (if 'grow 1 0')
//   - the flex-basis value (if '1 1 basis')
//
// For example, '0 1 auto' => 'initial'

export function getOneValueSyntaxString(string) {
  if (string === "0 1 auto") return "initial";
  // if (string === "1 1 auto") return "auto";
  if (string === "0 0 auto") return "none";
  const [grow, shrink, basis] = string.split(" ");
  if (shrink === "1" && (basis === "0" || basis === "0%")) return grow;
  if (grow === "1" && shrink === "1") return basis;
  return null;
}

// Accepts an array of three-value strings and calls getOneValueSyntaxString for each string.
// Returns an array with one-value syntax strings.

export function getOneValueSyntax(arr) {
  return arr.map((string) => getOneValueSyntaxString(string)).join(", ");
}

// Accepts a one-value syntax string: 'initial', '0', '2', '120px', etc.
// Returns a three-value syntax string, such as '0 1 auto'.
//
// For example, 'initial' => '0 1 auto'
//              '1'       => '1 1 0'
//              '120px'   => '1 1 120px'

export function getThreeValueSyntax(string) {
  if (string === "initial") return "0 1 auto";
  if (string === "auto") return "1 1 auto";
  if (string === "none") return "0 0 auto";
  if (string === "0" || Number(string)) return `${string} 1 0`;
  return `1 1 ${string}`;
}
