export function cleanError(error) {

  if (!error) return "";

  return error
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);

}
