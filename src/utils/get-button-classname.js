export function getButtonClassName(value, arr) {
  let isActive = false;
  let isMultiple = arr.length > 1;

  if (arr.length > 0 && arr.includes(value)) {
    isActive = true;
  }

  return { isActive, isMultiple };
}
