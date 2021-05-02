import { Link } from '@reach/router';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import NewsPlaceholderPhoto from '../../../images/news-placeholder.jpeg';

const NewsSection = () => {
  return (
    // Section Content Container
    <div className="container mx-auto mb-40">
      {/* Section Header */}
      <h1 className="text-5xl mb-12">
        <FormattedMessage id="index.news.title" />
      </h1>
      {/* 2 ROW GRID - FOR 2 NEWS ARTICLES  */}
      <div className="flex flex-wrap flex-col -mx-1 overflow-hidden">
        {/* 2 COLS GRID - SEPARATING PHOTO AND TEXT */}
        {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
        <div className="flex flex-wrap flex-row w-full">
          <div className="p-4 w-full md:w-1/2 h-auto items-center flex-col">
            {/* FIRST RPW */}
            <img
              src={NewsPlaceholderPhoto}
              alt=""
              className="object-fill border-2 border-hubblr-turquoise shadow-box-purple"
            />
          </div>
          <div className="p-4 w-full md:w-1/2 h-auto items-center flex-col">
            <h2 className="text-3xl mb-10 text-left">
              <FormattedMessage id="index.news.client-test.heading" />
            </h2>
            <p className="my-5 text-left">
              <FormattedMessage id="index.news.client-test.description" />
            </p>
            <div className="flex ">
              <Link to="/contact" className="my-5 w-1/2">
                <span className=" borderless-link-black">
                  <FormattedMessage id="generic.read-more" />
                </span>
              </Link>
            </div>
          </div>
          {/* SECOND ROW */}
        </div>
        {/* 2 COLS GRID - SEPARATING PHOTO AND TEXT */}
        {/* EACH CONTENT CARD CAN BE OUTSOURCED INTO SINGLE CONTENT CARD COMPONENT */}
        {/* <div className="flex-row md:flex-row-reverse"> */}
        <div className="flex flex-wrap w-full flex-row md:flex-row-reverse">
          <div className="p-4 w-full md:w-1/2 h-auto items-center md:flex-col">
            {/* FIRST RPW */}
            <img
              src={NewsPlaceholderPhoto}
              alt=""
              className="object-fill border-2 border-hubblr-turquoise shadow-box-purple"
            />
          </div>
          <div className="p-4 w-full md:w-1/2 h-auto items-center md:flex-col">
            <h2 className="text-3xl mb-10 text-left">
              <FormattedMessage id="index.news.client-test.heading" />
            </h2>
            <p className="my-5 text-left">
              <FormattedMessage id="index.news.client-test.description" />
            </p>
            <div className="flex ">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-hubblr-blue to-hubblr-green">
                <Link to="/contact" className="my-5 w-1/2 ">
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
