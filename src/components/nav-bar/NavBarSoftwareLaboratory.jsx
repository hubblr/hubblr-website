import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import Button from '../buttons/bases/Button';
import NavBarContactButton from './NavBarContactButton';
import hubblrIcon from '../../images/hubblr-icon-black.png';

const NavBarSoftwareLaboratory = React.forwardRef(({ className }, ref) => {
  const leftContentRef = useRef();

  return (
    <NavBar
      ref={ref}
      containerClassName={`bg-white ${className}`}
      desktopLeftContent={
        <div
          className="grid items-center"
          style={{
            gridTemplateColumns: 'max-content 1fr max-content',
          }}
        >
          <div ref={leftContentRef} className="flex">
            <img src={hubblrIcon} alt="hubblr icon" className="w-12 mr-3" />
            <span className="text-lg font-bold">Software Laboratory</span>
          </div>
          <div className="flex flex-wrap justify-center text-lg font-light">
            <Button className="button-theme-light mr-2">
              <FormattedMessage id="software-laboratory.navbar.services" />
            </Button>
            <Button className="button-theme-light mr-2">
              <FormattedMessage id="software-laboratory.navbar.projects" />
            </Button>
            <Button className="button-theme-light mr-2">
              <FormattedMessage id="software-laboratory.navbar.team" />
            </Button>
            <Button className="button-theme-light mr-2">
              <FormattedMessage id="software-laboratory.navbar.open-source" />
            </Button>
            <Button className="button-theme-light">
              <FormattedMessage id="software-laboratory.navbar.blog" />
            </Button>
          </div>
          <div className="flex justify-end">
            <NavBarContactButton className="button-theme-light" />
          </div>
        </div>
      }
    />
  );
});

NavBarSoftwareLaboratory.propTypes = {
  className: PropTypes.string,
};

NavBarSoftwareLaboratory.defaultProps = {
  className: '',
};

export default NavBarSoftwareLaboratory;
