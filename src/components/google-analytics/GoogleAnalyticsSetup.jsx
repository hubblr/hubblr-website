import React from 'react';
import { Helmet } from 'react-helmet';

function GoogleAnalyticsSetup() {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JDQ5TR0ND0" />
      <script>{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-JDQ5TR0ND0')`}</script>
    </Helmet>
  );
}

export default GoogleAnalyticsSetup;
