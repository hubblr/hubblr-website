import React from 'react';
import PropTypes from 'prop-types';
import PageLinkItem from './PageLinkItem';

function PageLinks({ links }) {
  return (
    <div className="flex gap-5">
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
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      notificationNumber: PropTypes.number,
    })
  ).isRequired,
};

export default PageLinks;
