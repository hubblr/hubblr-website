import React from 'react';
import { Helmet } from 'react-helmet';

function GoogleAnalyticsSetup() {
  return (
    <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6QL6YFNT2H" />
      <script>{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-6QL6YFNT2H')`}</script>
    </Helmet>
  );
}

export default GoogleAnalyticsSetup;
