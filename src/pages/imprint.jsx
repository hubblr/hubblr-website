import React from 'react';
import { FormattedMessage } from 'react-intl';
import Layout from '../components/layouts/Layout';

const ImprintPage = () => (
  <Layout>
    <div className="container mx-auto">
      <div className="flex flex-col flex-grow mt-16 p-6 pt-16">
        <h1>
          <FormattedMessage id="imprint.header" defaultMessage="Impressum" />
        </h1>
        <div className="mt-8 mb-4">
          appointer Gesellschaft mit beschränkter Haftung
          <br />
          Gertrudenstraße 7
          <br />
          D-48149 Münster
          <br />
        </div>
        <div className="mb-4">
          Vertretungsberechtiger Geschäftsführer:
          <br />
          Cedric Bals
          <br />
        </div>
        <div className="mb-4">
          Telefon: +49 251 59068446
          <br />
        </div>
        <div className="mb-4">
          E-Mail:
          <a href="mailto:hello@appointer.com" className="link mx-">
            hello@appointer.com
          </a>
        </div>
        <div className="mb-4">
          Registergericht: Amtsgericht Münster
          <br />
          Registernummer: HRB 16768
          <br />
        </div>
        <div className="mb-4">
          Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE 312816042
          <br />
        </div>
        <div className="mb-4">
          appointer GmbH
          <br />
          Gertrudenstr. 7
          <br />
          48149 Münster
          <br />
        </div>
      </div>
    </div>
  </Layout>
);

export default ImprintPage;
