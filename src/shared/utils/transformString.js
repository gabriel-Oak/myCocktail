const transformString = (string = "") => {

  let transformed = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  transformed = transformed
    .replace(/(\s?\/\s?)/g, '_')
    .replace(/\s{1,}/g, '_')

  return transformed;
}

export default transformString;
