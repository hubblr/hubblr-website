import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink as Link } from 'gatsby-theme-i18n/src/components/localized-link';
import Button from '../buttons/bases/Button';
import NavBarLink from './NavBarLink';
import LightningImage from '../image-components/LightningImage';
import ConsultingIllustrationImage from '../image-components/ConsultingIllustrationImage';
import VenturesArrowImage from '../image-components/VenturesArrowImage';
import GradientButton from '../buttons/gradient-border-buttons/GradientButton';

const CollapsedContent = ({ isCollapsed, navigate }) => {
  return (
    <div className={`${isCollapsed ? 'hidden' : ''} w-full px-4 pb-8 flex-grow flex flex-col`}>
      <div className="flex-grow flex flex-col">
        <hr className="bg-white h-p" />
        <Button
          onClick={() => {
            navigate('/');
          }}
        >
          <NavBarLink>
            <FormattedMessage id="index.title" />
          </NavBarLink>
        </Button>
        <hr className="bg-white h-p" />
        <Button
          onClick={() => {
            navigate('/softwarelaboratory');
          }}
        >
          <NavBarLink linkImage={<LightningImage className="h-full" />}>
            <FormattedMessage id="index.software-laboratory.title" />
          </NavBarLink>
        </Button>
        <hr className="bg-white h-p" />
        <Button
          onClick={() => {
            navigate('/consulting');
          }}
        >
          <NavBarLink linkImage={<ConsultingIllustrationImage className="h-full" />}>
            <FormattedMessage id="index.consulting.title" />
          </NavBarLink>
        </Button>
        <hr className="bg-white h-p" />
        <Button
          onClick={() => {
            navigate('/ventures');
          }}
        >
          <NavBarLink linkImage={<VenturesArrowImage className="h-full" />}>
            <FormattedMessage id="index.ventures.title" />
          </NavBarLink>
        </Button>
        <hr className="bg-white h-p" />
        <Button
          onClick={() => {
            navigate('/contact');
          }}
        >
          <NavBarLink>
            <FormattedMessage id="generic.contact-short" />
          </NavBarLink>
        </Button>
        <hr className="bg-white h-p" />
      </div>
      <Link to="/contact" className="mt-3 w-full">
        <GradientButton
          borderButtonClassName="w-full"
          addedFlexClasses="w-full justify-between"
          theme="dark"
        >
          <div className="text-xl">
            <FormattedMessage id="generic.contact" />
          </div>
        </GradientButton>
      </Link>
    </div>
  );
};

CollapsedContent.propTypes = {
  isCollapsed: PropTypes.bool,
  navigate: PropTypes.func.isRequired,
};

CollapsedContent.defaultProps = {
  isCollapsed: true,
};

export default CollapsedContent;
