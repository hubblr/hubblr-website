import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import IntroductionSection from '../components/index/page-sections/IntroductionSection';
import IntroductionSectionContent from '../components/index/page-sections/IntroductionSectionContent';
import NavBar from '../components/nav-bar/NavBar';
import SEO from '../components/seo/Seo';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import CallToActionSection from '../components/index/page-sections/CallToActionSection';
import ServiceSection from '../components/index/page-sections/ServiceSection';
import StartupSection from '../components/index/page-sections/StartupSection';
import TestimonialSection from '../components/index/page-sections/TestimonialSection';

export const query = graphql`
  query allContentfulCustomerTestimonial($locale: String) {
    allContentfulCustomerTestimonial(filter: { node_locale: { eq: $locale }, name: { ne: "DoNotShowWorkaround" }) {
      edges {
        node {
          id
          name
          jobRole
          testimonial {
            testimonial
          }
          profileImage {
            file {
              url
            }
          }
          logo {
            file {
              url
            }
          }
        }
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
function IndexPage({ data }) {
  return (
    <MainPageDarkLayout>
      <NavBar
        showNavBar
        className="z-50"
        isFixed
        desktopRightContent={
          <div className="flex justify-end items-center">
            <NavBarContactButton />
          </div>
        }
      />
      <SEO title="index.seo.title" />
      <div>
        <IntroductionSection>
          <IntroductionSectionContent />
        </IntroductionSection>
        <ServiceSection />
        <TestimonialSection testimonials={data?.allContentfulCustomerTestimonial?.edges} />
        <CallToActionSection />
        <StartupSection />
      </div>
    </MainPageDarkLayout>
  );
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allContentfulCustomerTestimonial: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
