import React from 'react';
import { FormattedMessage } from 'react-intl';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBar from '../components/nav-bar/NavBar';
import '../css/text-page-styles.scss';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import SEO from '../components/seo/Seo';

const ImprintPage = () => (
  <LayoutWrapper>
    <MainPageDarkLayout>
      <NavBar
        showNavBar
        showAlways
        className="sticky"
        desktopRightContent={
          <div className="flex justify-end items-center">
            <NavBarContactButton />
          </div>
        }
      />
      <SEO title="imprint.seo.title" />
      <div className="text-content container mx-auto">
        <div className="flex flex-col flex-grow lg:mt-16">
          <h1>
            <FormattedMessage id="imprint.header" defaultMessage="Impressum" />
          </h1>
          <div className="mt-8 mb-4">
            hubblr - Bals Greinus GbR
            <br />
            Drubbel 3
            <br />
            48143 Münster
            <br />
          </div>
          <div className="mb-4">
            Vertretungsberechtiger Geschäftsführer:
            <br />
            Cedric Bals, Florian Greinus
            <br />
          </div>
          <div className="mb-4">
            Telefon: +49 251 5906710-0
            <br />
          </div>
          <div className="mb-4">
            <span>E-Mail:&#x20;</span>
            <a href="mailto:hello@hubblr.io" className="link mx-">
              hello@hubblr.io
            </a>
          </div>
          <div className="mb-4">
            Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE 312816042
            <br />
          </div>
        </div>
      </div>
    </MainPageDarkLayout>
  </LayoutWrapper>
);

export default ImprintPage;
