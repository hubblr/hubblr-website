import React from 'react';
import PropTypes from 'prop-types';
import PageLinkItem from './PageLinkItem';

function PageLinks({ className, links }) {
  return (
    <div className={`flex flex-wrap gap-5 ${className}`}>
      {links.map(({ text, notificationNumber }) => {
        return (
          <PageLinkItem key={text} notificationNumber={notificationNumber}>
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
      text: PropTypes.string,
      notificationNumber: PropTypes.number,
    })
  ).isRequired,
};

PageLinks.defaultProps = {
  className: '',
};

export default PageLinks;
