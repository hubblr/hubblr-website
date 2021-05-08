import React from 'react';
import { FormattedMessage } from 'react-intl';
import NewsPlaceholderPhoto from '../../../images/news-placeholder.jpeg';
import NewsSectionContentCard from './NewsSectionContentCard';

const NewsSection = () => {
  return (
    // Section Content Container
    <div className="container mx-auto mb-40">
      {/* Section Header */}
      <h1 className="text-5xl mb-12">
        <FormattedMessage id="index.news.title" />
      </h1>
      <div className="flex flex-wrap flex-col -mx-1 overflow-hidden">
        <NewsSectionContentCard
          className=""
          src={NewsPlaceholderPhoto}
          alt="Placeholder Photo"
          header={<FormattedMessage id="index.news.client-test.heading" />}
          text={<FormattedMessage id="index.news.client-test.description" />}
          link="/contact"
        />
        <NewsSectionContentCard
          className="md:flex-row-reverse"
          src={NewsPlaceholderPhoto}
          alt="Placeholder Photo"
          header={<FormattedMessage id="index.news.client-test.heading" />}
          text={<FormattedMessage id="index.news.client-test.description" />}
          link="/contact"
        />
      </div>
    </div>
  );
};

export default NewsSection;
