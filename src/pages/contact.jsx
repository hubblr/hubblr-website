import React from 'react';
import Layout from '../components/layouts/Layout';
import BusinessCardContactPage from '../components/business-card/BusinessCardContactPage';
import ContactPageForm from '../components/contact-page-content/ContactPageForm';
import SEO from '../components/seo/Seo';
import NavBar from '../components/nav-bar/NavBar';
import NavBarHomeButton from '../components/nav-bar/NavBarHomeButton';

function ContactPage() {
  return (
    <Layout
      navBar={
        <NavBar
          className="sticky"
          collapsedClassName="fixed"
          rightContent={
            <div className="flex justify-end items-center">
              <NavBarHomeButton />
            </div>
          }
        />
      }
    >
      <SEO title="contact.seo.title" description="contact.seo.description" />
      <div className="flex-grow container mx-auto h-full flex flex-col items-center">
        <h1 className="mb-8 lg:mb-0 text-5xl font-extrabold">Let‘s talk!</h1>
        <div className="flex-grow w-full flex flex-col justify-center items-center">
          <div className="h-1/2 w-full flex flex-col lg:flex-row lg:justify-between">
            <div className="flex-grow flex-basis-0 mb-6 lg:mb-0 lg:mr-6">
              <BusinessCardContactPage />
            </div>
            <div className="flex-grow-2 flex-basis-0">
              <ContactPageForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
