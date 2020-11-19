function arrayOfLength(expectedLength, props, propName, componentName) {
  const arrayPropLength = props[propName].length;

  if (arrayPropLength !== expectedLength) {
    return new Error(
      `Invalid array length ${arrayPropLength} (expected ${expectedLength}) for ` +
        `prop ${propName} supplied to ${componentName}. Validation failed.`
    );
  }
  return undefined;
}

function arrayOfLength2(prop, propName) {
  return arrayOfLength(2, prop, propName);
}

// very likely to add more functions here, so suppress eslint for now
// eslint-disable-next-line import/prefer-default-export
export { arrayOfLength2 };
