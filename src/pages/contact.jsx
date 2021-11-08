import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import BusinessCardContactPage from '../components/contact/business-card/BusinessCardContactPage';
import ContactPageForm from '../components/contact/contact-page-form/ContactPageForm';
import SEO from '../components/seo/Seo';
import NavBar from '../components/nav-bar/NavBar';
import NavBarHomeButton from '../components/nav-bar/NavBarHomeButton';
import { MobileAndTabletQuery, DesktopQuery } from '../util/helpers';
import LayoutWrapper from '../components/layouts/LayoutWrapper';

export const query = graphql`
  query allContentfulContactCard($locale: String) {
    allContentfulContactCard(filter: { node_locale: { eq: $locale } }) {
      edges {
        node {
          name
          position
          image {
            file {
              fileName
              url
            }
            title
          }
        }
      }
    }
  }
`;

function ContactPage({ data }) {
  return (
    <LayoutWrapper>
      <MainPageDarkLayout>
        <SEO title="contact.seo.title" description="contact.seo.description" />
        <NavBar
          showAlways
          desktopRightContent={
            <div className="flex justify-end items-center">
              <NavBarHomeButton />
            </div>
          }
        />
        <div className="flex-grow overflow-hidden container mx-auto h-full flex flex-col items-center mt-10">
          <h1 className="mb-8 text-5xl font-extrabold">
            <FormattedMessage id="contact.heading" />
          </h1>
          <div className="flex-grow w-full flex flex-col justify-center items-center">
            <DesktopQuery>
              <div className="min-h-1/2 w-full flex justify-between">
                <div className="flex-grow flex-basis-0 mr-6">
                  <BusinessCardContactPage contact={data.allContentfulContactCard.edges.node} />
                </div>
                <div className="flex-grow-2 flex-basis-0">
                  <ContactPageForm />
                </div>
              </div>
            </DesktopQuery>
            <MobileAndTabletQuery>
              <div className="w-full flex flex-col">
                <div className="mb-6">
                  <BusinessCardContactPage />
                </div>
                <ContactPageForm />
              </div>
            </MobileAndTabletQuery>
          </div>
        </div>
      </MainPageDarkLayout>
    </LayoutWrapper>
  );
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    allContentfulContactCard: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ContactPage;
