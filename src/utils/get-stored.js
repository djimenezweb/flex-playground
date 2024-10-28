export function getStored(key) {
  return JSON.parse(window.localStorage.getItem(key)) || [];
}
