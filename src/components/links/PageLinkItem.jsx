import React from 'react';
import PropTypes from 'prop-types';
import DefaultLink from './DefaultLink';

function PageLinkItem({ children, notificationNumber, href }) {
  const innerItem = (
    <div className="flex items-center gap-1">
      <div className="underline text-xl">{children}</div>
      {notificationNumber > 0 && (
        <div className="bg-white text-black rounded-full text-sm font-bold w-5 h-5 text-center table-cell align-middle">
          {notificationNumber}
        </div>
      )}
    </div>
  );

  return href ? <a href={href}>{innerItem}</a> : <DefaultLink>{innerItem}</DefaultLink>;
}

PageLinkItem.propTypes = {
  children: PropTypes.string.isRequired,
  notificationNumber: PropTypes.number,
  href: PropTypes.string,
};

PageLinkItem.defaultProps = {
  notificationNumber: 0,
  href: '',
};

export default PageLinkItem;
