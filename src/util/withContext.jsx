import React from 'react';

export default (Context, propName) => (WrappedComponent) => (props) =>
  (
    <Context.Consumer>
      {(contextValue) => <WrappedComponent {...props} {...{ [propName]: contextValue }} />}
    </Context.Consumer>
  );
