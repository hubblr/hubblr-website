import React, { useEffect, useState } from 'react';
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

const NavBarMainPage = React.forwardRef(
  ({ className, desktopLeftContent, desktopRightContent, showAlways }, ref) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showNavBar, setShowNavBar] = useState(showAlways);
    const { locale } = useLocalization();

    // navigation functions
    function navigateByNavBar(to) {

        localizedNavigate(to, locale).then(() => {
          if (isCollapsed === true) {
          setIsCollapsed(false);
          } else if (isCollapsed === false) {
            setIsCollapsed(true);
          }
        });
    }

    function updateShowNavBar() {
      if (window.scrollY > 50 && !showNavBar) {
        setShowNavBar(true);
      } else if (window.scrollY <= 50 && showNavBar) {
        setShowNavBar(false);
      }
    }

    useEffect(() => {
      if (!showAlways) {
        window.addEventListener('scroll', updateShowNavBar);
      }
      return () => {
        if (!showAlways) {
          window.removeEventListener('scroll', updateShowNavBar);
        }
      };
    });

    return (
      <NavBar
        ref={ref}
        containerClassName={`navbar ${className}`}
        expandedClassName="bg-black"
        scrolledBackgroundClassName="navbar-background-blur"
        showNavBar={showNavBar}
        isCollapsed={isCollapsed}
        showAlways={showAlways}
        mobileLeftContent={
          <AppButton
            className="button-dark"
            onClick={() => {
              navigateByNavBar('/');
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
                className="button-dark py-1 px-1"
                onClick={() => {
                  navigateByNavBar('/');
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
                  navigateByNavBar('/');
                }}
              >
                <NavBarLink>
                  <FormattedMessage id="index.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateByNavBar('/softwarelaboratory');
                }}
              >
                <NavBarLink linkImage={<LightningImage className="h-full" />}>
                  <FormattedMessage id="index.software-laboratory.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateByNavBar('/consulting');
                }}
              >
                <NavBarLink linkImage={<ConsultingIllustrationImage className="h-full" />}>
                  <FormattedMessage id="index.consulting.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateByNavBar('/ventures');
                }}
              >
                <NavBarLink linkImage={<VenturesArrowImage className="h-full" />}>
                  <FormattedMessage id="index.ventures.title" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
              <Button
                onClick={() => {
                  navigateByNavBar('/contact');
                }}
              >
                <NavBarLink>
                  <FormattedMessage id="generic.contact-short" />
                </NavBarLink>
              </Button>
              <hr className="bg-white h-p" />
            </div>
            <Link to="/contact" className="mt-3 w-full">
              <HubblrGradientBorderButtonBase
                borderButtonClassName="w-full"
                addedFlexClasses="w-full justify-between"
                theme="dark"
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
  desktopLeftContent: PropTypes.node,
  desktopRightContent: PropTypes.node,
  showAlways: PropTypes.bool,
};

NavBarMainPage.defaultProps = {
  className: '',
  desktopLeftContent: null,
  desktopRightContent: null,
  showAlways: false,
};

export default NavBarMainPage;
