import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocalization } from 'gatsby-theme-i18n';
import TestimonialSectionContentContainer from './TestimonialSectionContentContainer';

const TestimonialSection = () => {
  const { locale } = useLocalization();
  const data = useStaticQuery(graphql`
    query allContentfulCustomerTestimonial($intlLocale: String) {
      allContentfulCustomerTestimonial(node_locale: { eq: $intlLocale }) {
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
              node_locale
            }
          }
        }
      }
    }
  `);

  return (
    // Section Container
    <div className="container mx-auto mb-40">
      {/* 2 COL GRID @largerScreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.allContentfulCustomerTestimonial.edges.map((edge) => {
          return (
            <TestimonialSectionContentContainer
              key={`testimonial-${edge.node.id}`}
              personaImage={edge.node.profileImage.file.url}
              corporateLogo={edge.node.logo.file.url}
              personaName={edge.node.name}
              personaJobtitle={edge.node.jobRole}
              personaQuoteText={edge.node.testimonial.testimonial}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
