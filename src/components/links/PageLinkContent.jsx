import React from 'react';
import PropTypes from 'prop-types';

function PageLinkContent({ children, notificationNumber }) {
  return (
    <div className="flex items-center gap-1">
      <div className="underline text-xl">{children}</div>
      {notificationNumber > 0 && (
        <div className="bg-white text-black rounded-full text-sm font-bold w-5 h-5 text-center table-cell align-middle">
          {notificationNumber}
        </div>
      )}
    </div>
  );
}

PageLinkContent.propTypes = {
  children: PropTypes.string.isRequired,
  notificationNumber: PropTypes.number,
};

PageLinkContent.defaultProps = {
  notificationNumber: 0,
};

export default PageLinkContent;
