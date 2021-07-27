import React from 'react';

/* eslint-disable react/jsx-props-no-spreading */
export default (Context, propName) => (WrappedComponent) => (props) =>
  (
    <Context.Consumer>
      {(contextValue) => <WrappedComponent {...props} {...{ [propName]: contextValue }} />}
    </Context.Consumer>
  );
/* eslint-enable react/jsx-props-no-spreading */
