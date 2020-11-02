import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import NavBarTopHR from './NavBarTopHR';

function NavBarTopStackedLinks({ content, className }) {
  return (
    <div key={uuidv4()} className={className}>
      {content.map(({ text, linkImage }, i) => {
        return (
          <div>
            {i === 0 && <NavBarTopHR />}
            <div className="h-20 flex justify-center items-center p-3 text-white">
              <div className="h-16 -mr-3">{linkImage}</div>
              <div className="text-lg font-bold">{text}</div>
            </div>
            <NavBarTopHR />
          </div>
        );
      })}
    </div>
  );
}

NavBarTopStackedLinks.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      linkImage: PropTypes.element,
    })
  ).isRequired,
  className: PropTypes.string,
};

NavBarTopStackedLinks.defaultProps = {
  className: '',
};

export default NavBarTopStackedLinks;
