import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import NavBarTopDesktop from './NavBarTopDesktop';
import NavBarTopMobile from './NavBarTopMobile';
import { MobileAndTabletQuery, DesktopQuery } from '../../util/helpers';
import NavBarTopStackedLinks from './NavBarTopStackedLinks';
import LightningImage from '../image-components/LightningImage';
import ConsultingIllustrationImage from '../image-components/ConsultingIllustrationImage';
import VenturesArrowImage from '../image-components/VenturesArrowImage';
import HubblrGradientBorderButtonBase from '../gradient-border-buttons/HubblrGradientBorderButtonBase';
import LongArrowImage from '../image-components/LongArrowImage';

const NavBarTop = React.forwardRef(({ className, shouldBeShown }, ref) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const isVisible = shouldBeShown || !isCollapsed;

  return (
    <div
      className={`fixed top-0 w-full z-50 ${
        !isCollapsed ? 'h-screen overflow-y-scroll bg-black' : 0
      } ${isVisible ? '' : 'invisible'} ${className}`}
    >
      <div
        className={`${isCollapsed ? '' : 'hidden'} absolute w-full h-full navbar-background-blur`}
      />
      <div className="relative container mx-auto h-full flex flex-col">
        <div ref={ref} className="w-full p-8 md:p-0">
          <MobileAndTabletQuery>
            <NavBarTopMobile isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
          </MobileAndTabletQuery>
          <DesktopQuery>
            <NavBarTopDesktop />
          </DesktopQuery>
        </div>
        <div className={`${isCollapsed ? 'hidden' : ''} w-full px-8 pb-8 flex-grow flex flex-col`}>
          <NavBarTopStackedLinks
            content={[
              { text: 'Home' },
              { text: 'Software Laboratory', linkImage: <LightningImage className="h-full" /> },
              {
                text: 'Solution Assessment',
                linkImage: <ConsultingIllustrationImage className="h-full" />,
              },
              { text: 'Digital Ventures', linkImage: <VenturesArrowImage className="h-full" /> },
              { text: 'Kontakt' },
            ]}
            className="flex-grow w-full mb-6"
          />
          <Link to="/contact">
            <HubblrGradientBorderButtonBase
              widthClass="w-full"
              addedFlexClasses="justify-between gap-3"
              theme="dark"
              image={<LongArrowImage theme="dark" className="w-10" />}
            >
              <div className="text-xl">Jetzt kontaktieren</div>
            </HubblrGradientBorderButtonBase>
          </Link>
        </div>
      </div>
    </div>
  );
});

NavBarTop.propTypes = {
  className: PropTypes.string,
  shouldBeShown: PropTypes.bool.isRequired,
};

NavBarTop.defaultProps = {
  className: '',
};

export default NavBarTop;
