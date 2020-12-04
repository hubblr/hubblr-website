import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { LocalizedLink as Link } from 'gatsby-theme-i18n/src/components/localized-link';
import { useLocalization } from 'gatsby-theme-i18n';
import NavBar from './NavBar';
import HubblrImage from '../image-components/HubblrImage';
import AppButton from '../buttons/bases/AppButton';
import HamburgerMenuIcon from '../image-components/HamburgerMenuIcon';
import Button from '../buttons/bases/Button';
import NavBarLink from './NavBarLink';
import LightningImage from '../image-components/LightningImage';
import ConsultingIllustrationImage from '../image-components/ConsultingIllustrationImage';
import VenturesArrowImage from '../image-components/VenturesArrowImage';
import localizedNavigate from '../../util/localizedNavigate';
import HubblrGradientBorderButtonBase from '../buttons/gradient-border-buttons/HubblrGradientBorderButtonBase';
import LongArrowImage from '../image-components/LongArrowImage';
import PageContext from '../../context/PageContext';

const NavBarMainPage = React.forwardRef(
  ({ className, showNavBar, desktopLeftContent, desktopRightContent }, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const pageInfo = useContext(PageContext);
    const { locale } = useLocalization();

    // navigation functions
    function navigateByNavBar(to) {
      localizedNavigate(to, locale).then(() => {
        setIsCollapsed(true);
      });
    }
    function navigateToIndexSection(to, fieldName) {
      if (pageInfo.page === 'index') {
        // when already on index page, it is much cleaner to scroll
        if (fieldName) {
          window.scrollTo(0, pageInfo.sectionContentStarts[fieldName]);
        } else {
          window.scrollTo(0, 0);
        }
        setIsCollapsed(true);
      } else {
        navigateByNavBar(to);
      }
    }

    return (
      <NavBar
        ref={ref}
        containerClassName={`navbar ${className}`}
        expandedClassName="bg-black"
        scrolledBackgroundClassName="navbar-background-blur"
        showNavBar={showNavBar}
        isCollapsed={isCollapsed}
        mobileLeftContent={
          <AppButton
            className="button-dark"
            onClick={() => {
              navigateToIndexSection('/');
            }}
          >
            <HubblrImage className="w-20 h-auto" />
          </AppButton>
        }
        mobileRightContent={
          <HamburgerMenuIcon
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
            isActive={!isCollapsed}
          />
        }
        desktopContent={
          <div className="flex items-center">
            <div className="w-1/3">{desktopLeftContent}</div>
            <div className="w-1/3 self-center flex justify-center">
              <AppButton
                className="button-dark"
                onClick={() => {
                  navigateToIndexSection('/');
                }}
              >
                <HubblrImage className="w-20" />
              </AppButton>
            </div>
            <div className="w-1/3">{desktopRightContent}</div>
          </div>
        }
        collapsedContent={
          <div
            className={`${isCollapsed ? 'hidden' : ''} w-full px-4 pb-8 flex-grow flex flex-col`}
          >
            <div className="flex-grow flex flex-col">
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateToIndexSection('/');
                }}
              >
                <NavBarLink>
                  <FormattedMessage id="index.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateToIndexSection('/#softwareLaboratory', 'softwareLaboratory');
                }}
              >
                <NavBarLink linkImage={<LightningImage className="h-full" />}>
                  <FormattedMessage id="index.software-laboratory.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateToIndexSection('/#consulting', 'consulting');
                }}
              >
                <NavBarLink linkImage={<ConsultingIllustrationImage className="h-full" />}>
                  <FormattedMessage id="index.consulting.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateToIndexSection('/#ventures', 'ventures');
                }}
              >
                <NavBarLink linkImage={<VenturesArrowImage className="h-full" />}>
                  <FormattedMessage id="index.ventures.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  localizedNavigate('/contact', locale).then(() => {
                    setIsCollapsed(true);
                  });
                }}
              >
                <NavBarLink>
                  <FormattedMessage id="generic.contact-short" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
            </div>
            <Link to="/contact" className="mt-3">
              <HubblrGradientBorderButtonBase
                widthClass="w-full"
                addedFlexClasses="w-full justify-between"
                theme="dark"
                image={<LongArrowImage theme="dark" className="w-10" />}
              >
                <div className="text-xl">
                  <FormattedMessage id="generic.contact" />
                </div>
              </HubblrGradientBorderButtonBase>
            </Link>
          </div>
        }
      />
    );
  }
);

NavBarMainPage.propTypes = {
  className: PropTypes.string,
  showNavBar: PropTypes.bool,
  desktopLeftContent: PropTypes.node,
  desktopRightContent: PropTypes.node,
};

NavBarMainPage.defaultProps = {
  className: '',
  showNavBar: true,
  desktopLeftContent: null,
  desktopRightContent: null,
};

export default NavBarMainPage;
