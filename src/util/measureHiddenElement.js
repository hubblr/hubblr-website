const containerStyle = {
  display: 'inline-block',
  position: 'absolute',
  visibility: 'hidden',
  zIndex: -100,
};

const measureDomNode = (node, enhanceMeasurableNode = (e) => e) => {
  const container = document.createElement('div');
  container.style = containerStyle;

  const clonedNode = node.cloneNode(true);
  const content = enhanceMeasurableNode(clonedNode);

  container.appendChild(content);

  document.body.appendChild(container);

  const height = container.clientHeight;
  const width = container.clientWidth;

  container.parentNode.removeChild(container);
  return { height, width };
};

const measureHiddenElement = (node) => {
  return measureDomNode(node, (clonedNode) => {
    clonedNode.classList.remove('hidden');
    clonedNode.classList.remove('fixed');
    return clonedNode;
  });
};

export default measureHiddenElement;
