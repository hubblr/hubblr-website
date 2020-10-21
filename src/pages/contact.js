import React from 'react';
import ContactLayout from '../components/pageLayouts/ContactLayout.jsx';
import HubblrImage from '../components/imageComponents/HubblrImage.jsx';
import BusinessCardContactPage from '../components/businessCard/BusinessCardContactPage.jsx';
import ContactPageForm from '../components/contactPageContent/ContactPageForm.jsx';
import HubblrPageLinks from '../components/links/HubblrPageLinks.jsx';

function ContactPage() {
  return (
    <ContactLayout>
      <div className="h-full flex flex-col items-center">
        <div className="mb-8">
          <HubblrImage className="w-20" />
        </div>
        <h1 className="mb-8 text-6xl font-extrabold">{"Let's talk!"}</h1>
        <div className={`w-full mb-56 flex-grow flex flex-row gap-16`}>
          <div className="flex-grow flex-basis-0">
            <BusinessCardContactPage />
          </div>
          <div className="flex-grow-2 flex-basis-0">
            <ContactPageForm />
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
