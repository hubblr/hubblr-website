import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import NavBarTopHR from './NavBarTopHR';
import Button from '../simple/button/Button';

function NavBarTopStackedLinks({ content, className }) {
  return (
    <div className={className}>
      {content.map(({ text, linkImage }, i) => {
        return (
          <div key={uuidv4()}>
            {i === 0 && <NavBarTopHR />}
            <Button className="w-full navbar-hover-blur h-20 flex justify-center items-center p-3 text-white">
              <div className="h-16 -mr-3">{linkImage}</div>
              <div className="text-lg font-bold">{text}</div>
            </Button>
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
