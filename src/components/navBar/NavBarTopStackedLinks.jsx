import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import NavBarTopHR from './NavBarTopHR';
import IndexPageContext from '../../context/IndexPageContext';

function NavBarTopStackedLinks({ content, className }) {
  const { navBarSizeClass } = useContext(IndexPageContext);

  return (
    <div className={className}>
      {content.map(({ text, linkImage }, i) => {
        return (
          <div key={uuidv4()}>
            {i === 0 && <NavBarTopHR />}
            <div className={`h-${navBarSizeClass} flex justify-center items-center p-3 text-white`}>
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
