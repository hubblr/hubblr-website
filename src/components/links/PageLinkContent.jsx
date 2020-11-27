import React from 'react';
import PropTypes from 'prop-types';

function PageLinkContent({ children, notificationNumber }) {
  const notificationNumberShown = notificationNumber > 0;

  return (
    <div className="flex items-center">
      <div className={`underline text-xl${notificationNumberShown ? ' mr-1' : ''}`}>{children}</div>
      {notificationNumberShown && (
        <div className="bg-white text-black rounded-full text-sm font-bold w-5 h-5 text-center table-cell align-middle">
          {notificationNumber}
        </div>
      )}
    </div>
  );
}

PageLinkContent.propTypes = {
  children: PropTypes.node.isRequired,
  notificationNumber: PropTypes.number,
};

PageLinkContent.defaultProps = {
  notificationNumber: 0,
};

export default PageLinkContent;
