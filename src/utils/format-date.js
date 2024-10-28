export function formatDate(str) {
  const date = new Date(str);
  const formatted = date.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return formatted;
}
