import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/layouts/Layout';
import NavBar from '../components/nav-bar/NavBar';
import '../css/text-page-styles.scss';
import NavBarHomeButton from '../components/nav-bar/NavBarHomeButton';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';
import SEO from '../components/seo/Seo';

const ImprintPage = () => (
  <Layout
    navBar={
      <NavBar
        className="sticky"
        rightContent={
          <div className="flex justify-end items-center">
            <NavBarHomeButton className="mr-2" />
            <NavBarContactButton />
          </div>
        }
      />
    }
  >
    <SEO title="imprint.seo.title" description="imprint.seo.description" />
    <div className="text-content container mx-auto">
      <div className="flex flex-col flex-grow mt-16 pt-16">
        <h1>
          <FormattedMessage id="imprint.header" defaultMessage="Impressum" />
        </h1>
        <div className="mt-8 mb-4">
          hubblr - Bals Greinus GbR
          <br />
          Hafenweg 11A
          <br />
          GER-48155 Münster
          <br />
        </div>
        <div className="mb-4">
          Vertretungsberechtiger Geschäftsführer:
          <br />
          Cedric Bals, Florian Greinus
          <br />
        </div>
        <div className="mb-4">
          Telefon: +49 251 59068446
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
  </Layout>
);

export default ImprintPage;
