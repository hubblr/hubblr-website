import React from 'react';
import ContactLayout from '../components/pageLayouts/ContactLayout';
import HubblrImage from '../components/imageComponents/HubblrImage';
import BusinessCardContactPage from '../components/businessCard/BusinessCardContactPage';
import ContactPageForm from '../components/contactPageContent/ContactPageForm';
import HubblrPageLinks from '../components/links/HubblrPageLinks';

function ContactPage() {
  return (
    <ContactLayout>
      <div className="h-full flex flex-col items-center">
        <div className="flex-grow w-full flex flex-col justify-center items-center">
          <div className="mb-8">
            <HubblrImage className="w-20" />
          </div>

          <h1 className="mb-8 text-6xl font-extrabold">Let‘s talk!</h1>

          <div className="h-1/2 w-full xl:w-2/3 flex flex-row gap-16">
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
    </ContactLayout>
  );
}

export default ContactPage;
