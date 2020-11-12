import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Button from '../simple/button/Button';

function NavBarTopStackedLinks({ content, className }) {
  return (
    <div className={className}>
      {content.map(({ text, linkImage, onClick }, i) => {
        return (
          <div key={uuidv4()}>
            {i === 0 && <hr className="bg-white h-p" />}
            <Button
              onClick={onClick}
              className="flex flex-row w-full navbar-hover-blur h-20 flex justify-center p-3 text-white"
            >
              <div className="relative">
                <div className="h-16 -mr-3 opacity-50 absolute left-0 transform -mt-5 -ml-8 z-0">
                  {linkImage}
                </div>
                <div className="relative z-1 text-lg font-bold">{text}</div>
              </div>
            </Button>
            <hr className="bg-white h-p" />
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
      onClick: PropTypes.func,
    })
  ).isRequired,
  className: PropTypes.string,
};

NavBarTopStackedLinks.defaultProps = {
  className: '',
};

export default NavBarTopStackedLinks;
