import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import TestimonialSectionContentContainer from './TestimonialSectionContentContainer';

const TestimonialSection = () => {
  const data = useStaticQuery(graphql`
    query allContentfulCustomerTestimonial {
      allContentfulCustomerTestimonial {
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
  `);

  return (
    // Section Container
    <div className="container mx-auto mb-40">
      {/* 2 COL GRID @largerScreen */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {data.allContentfulCustomerTestimonial.edges.map((edge) => {
          console.log(edge.node);
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
