import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import NewsPlaceholderPhoto from '../../../images/news-placeholder.jpeg';
// import SectionHeading from '../section-heading/SectionHeading';

const NewsSection = () => {
  return (
    // Section Content Container
    <div className="m-6">
      {/* Section Header */}
      <h1 className="text-5xl mb-3 mx-5">
        <FormattedMessage id="index.news.title" />
      </h1>
      {/* 2 ROW GRID - FOR 2 NEWS ARTICLES  */}
      <div className="grid grid-raws-2 grid-flow-row gap-10 p-4">
        {/* 2 COLS GRID - SEPARATING PHOTO AND TEXT */}
        <div className="grid-cols-2 flex flex-row ">
          {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
          <div className="w-full h-auto items-center md:flex-col mx-3 rounded-2xl">
            {/* FIRST RPW */}
            <img
              src={NewsPlaceholderPhoto}
              alt=""
              className="object-fill border-2 border-hubblr-turkis shadow-box-purple"
            />
          </div>
          <div className="w-full h-auto items-center md:flex-col mx-3 rounded-2xl">
            <h1 className="text-3xl m-5 text-left">
              <FormattedMessage id="index.news.client-test.heading" />
            </h1>
            <p className="m-5 py-2 text-left">
              <FormattedMessage id="index.news.client-test.description" />
            </p>
            <div className="flex ">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-link-gradient-1 to-hubblr-link-gradient-2">
                <Link to="/contact" className="m-5 w-1/2 ">
                  <FormattedMessage id="generic.read-more" />
                </Link>
              </h1>
            </div>
            {/* SECOND ROW */}
          </div>
        </div>
        {/* 2 COLS GRID - SEPARATING PHOTO AND TEXT */}
        <div className="grid-cols-2 flex flex-row-reverse ">
          {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
          <div className="w-full h-auto items-center md:flex-col mx-3 rounded-2xl">
            {/* FIRST RPW */}
            <img
              src={NewsPlaceholderPhoto}
              alt=""
              className="object-fill border-2 border-hubblr-turkis shadow-box-purple"
            />
          </div>
          <div className="w-full h-auto items-center md:flex-col mx-3 rounded-2xl ">
            <h1 className="text-3xl m-5 text-left">
              <FormattedMessage id="index.news.client-test.heading" />
            </h1>
            <p className="m-5 py-2 text-left">
              <FormattedMessage id="index.news.client-test.description" />
            </p>
            <div className="flex ">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-link-gradient-1 to-hubblr-link-gradient-2">
                <Link to="/contact" className="m-5 w-1/2 ">
                  <FormattedMessage id="generic.read-more" />
                </Link>
              </h1>
            </div>
            {/* SECOND ROW */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
