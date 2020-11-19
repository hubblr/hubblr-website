const allPropTypes = (...types) => (...args) => {
  const errors = types.map((type) => type(...args)).filter(Boolean);

  // no errors? cool!
  if (errors.length === 0) return undefined;

  // collect the messages and join them together
  const message = errors.map((e) => e.message).join('\n');
  return new Error(message);
};

export default allPropTypes;
