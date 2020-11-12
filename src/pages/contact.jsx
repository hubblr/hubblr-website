import React, { useLayoutEffect, useState } from 'react';
import Layout from '../components/layouts/Layout';
import HubblrImage from '../components/image-components/HubblrImage';
import BusinessCardContactPage from '../components/business-card/BusinessCardContactPage';
import ContactPageForm from '../components/contact-page-content/ContactPageForm';
import HubblrPageLinks from '../components/links/HubblrPageLinks';
import SEO from '../components/seo/Seo';

function ContactPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  useLayoutEffect(() => {
    function checkScroll() {
      setIsScrolled(window.pageYOffset > 0);
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <Layout>
      <SEO title="contact" />
      <div className="relative min-h-screen flex flex-col">
        <div
          className={`${isScrolled ? 'navbar-background-blur' : ''} sticky top-0 w-full py-8 px-4`}
        >
          <div className="container mx-auto flex justify-center">
            <div className="w-1/3 flex justify-center">
              <HubblrImage className="w-20" />
            </div>
          </div>
        </div>
        <div className="flex-grow container mx-auto h-full flex flex-col items-center">
          <h1 className="mb-8 text-5xl font-extrabold">Let‘s talk!</h1>
          <div className="flex-grow w-full flex flex-col justify-center items-center">
            <div className="h-1/2 w-full flex flex-col lg:flex-row lg:justify-between gap-6">
              <div className="flex-grow flex-basis-0">
                <BusinessCardContactPage />
              </div>
              <div className="flex-grow-2 flex-basis-0">
                <ContactPageForm />
              </div>
            </div>
          </div>

          <div className="w-full">
            <HubblrPageLinks />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ContactPage;
