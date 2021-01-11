const containerStyle = {
  display: 'inline-block',
  position: 'absolute',
  visibility: 'hidden',
  zIndex: -100,
};

const measureDomNode = (
  node,
  enhanceMeasurableNode = (e) => e,
  measureProps = ['clientHeight', 'clientWidth']
) => {
  const container = document.createElement('div');
  container.style = containerStyle;

  const clonedNode = node.cloneNode(true);
  console.log(node);
  console.log(clonedNode);
  const content = enhanceMeasurableNode(clonedNode);

  container.appendChild(content);

  document.body.appendChild(container);

  const res = {};
  measureProps.forEach((prop) => {
    res[prop] = container[prop];
  });

  container.parentNode.removeChild(container);
  return res;
};
export { measureDomNode };

const measureHiddenElement = (node, measureProps) => {
  return measureDomNode(
    node,
    (clonedNode) => {
      clonedNode.classList.remove('hidden');
      clonedNode.classList.remove('fixed');
      // eslint-disable-next-line no-param-reassign
      clonedNode.style.maxHeight = '';
      console.log(clonedNode);
      return clonedNode;
    },
    measureProps
  );
};

export default measureHiddenElement;
