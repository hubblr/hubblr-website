import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }
  }
`;

const SEO = ({ title, description, pathname }) => {
  const intl = useIntl();
  return (
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            defaultTitle,
            titleTemplate,
            defaultDescription,
            siteUrl,
            twitterUsername,
          },
        },
      }) => {
        const seo = {
          title: title ? intl.formatMessage({ id: title }) : defaultTitle,
          description: description ? intl.formatMessage({ id: description }) : defaultDescription,
          url: `${siteUrl}${pathname || '/'}`,
        };

        return (
          <>
            <Helmet title={seo.title} titleTemplate={titleTemplate}>
              <meta name="description" content={seo.description} />
              {seo.url && <meta property="og:url" content={seo.url} />}
              {seo.title && <meta property="og:title" content={seo.title} />}
              {seo.description && <meta property="og:description" content={seo.description} />}
              {seo.image && <meta property="og:image" content={seo.image} />}
              <meta name="twitter:card" content="summary_large_image" />
              {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
              {seo.title && <meta name="twitter:title" content={seo.title} />}
              {seo.description && <meta name="twitter:description" content={seo.description} />}
              {seo.image && <meta name="twitter:image" content={seo.image} />}
            </Helmet>
          </>
        );
      }}
    />
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
};

SEO.defaultProps = {
  title: null,
  description: null,
  pathname: null,
};
