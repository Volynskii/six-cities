export const compose = (...funcs) => (component) => {
  console.log(funcs)
  return funcs.reduceRight((prevResult, f) => f(prevResult), component);
};
