import React from 'react';
import PropTypes from 'prop-types';
import PageLinkItem from './PageLinkItem';

function PageLinks({ className, links }) {
  return (
    <div className={`flex flex-wrap justify-center gap-5 ${className}`}>
      {links.map(({ text, notificationNumber, href }) => {
        return (
          <PageLinkItem key={text} notificationNumber={notificationNumber} href={href}>
            {text}
          </PageLinkItem>
        );
      })}
    </div>
  );
}

PageLinks.propTypes = {
  className: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      notificationNumber: PropTypes.number,
      href: PropTypes.string,
    })
  ).isRequired,
};

PageLinks.defaultProps = {
  className: '',
};

export default PageLinks;
