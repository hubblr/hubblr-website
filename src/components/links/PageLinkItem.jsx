import React from 'react';
import PropTypes from 'prop-types';

//TODO: change to actual navigation, not just styling
function PageLinkItem({ children, notificationNumber }) {
  const notificationDiv =
    notificationNumber && notificationNumber > 0 ? (
      <div className="bg-white text-black rounded-full text-sm font-bold w-5 h-5 text-center table-cell align-middle">
        {notificationNumber}
      </div>
    ) : null;

  return (
    <div className="flex items-center gap-1">
      <div className="underline text-lg">{children}</div>
      {notificationDiv}
    </div>
  );
}

PageLinkItem.propTypes = {
  children: PropTypes.node,
  notificationNumber: PropTypes.number,
};

export default PageLinkItem;
