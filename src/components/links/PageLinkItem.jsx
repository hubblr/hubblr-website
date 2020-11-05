import React from 'react';
import PropTypes from 'prop-types';
import DefaultLink from './DefaultLink';

function PageLinkItem({ children, notificationNumber }) {
  const notificationDiv =
    notificationNumber > 0 ? (
      <div className="bg-white text-black rounded-full text-sm font-bold w-5 h-5 text-center table-cell align-middle">
        {notificationNumber}
      </div>
    ) : null;

  return (
    <DefaultLink>
      <div className="flex items-center gap-1">
        <div className="underline text-xl">{children}</div>
        {notificationDiv}
      </div>
    </DefaultLink>
  );
}

PageLinkItem.defaultProps = {
  notificationNumber: 0,
};

PageLinkItem.propTypes = {
  children: PropTypes.string.isRequired,
  notificationNumber: PropTypes.number,
};

export default PageLinkItem;
