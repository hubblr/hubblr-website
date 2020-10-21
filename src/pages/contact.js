import React from "react";
import DarkLayout from "../components/pageLayouts/darkLayout";
import FullSizeSection from "../components/pageSectionBases/fullSizeSection";
import HubblrImage from "../components/imageComponents/hubblrImage";
import BusinessCard from "../components/businessCard/businessCard";
import ContactForm from "../components/contactForm/contactForm";
import HubblrPageLinks from "../components/links/hubblrPageLinks";

function ContactPage() {
  return (
    <DarkLayout>
      <FullSizeSection>
        <div
          className="w-full flex flex-col items-center"
        >
          <HubblrImage
            className="w-20"
          />
          <h1
            className="text-6xl font-extrabold"
          >
            {"Let's talk!"}
          </h1>
          <div
            className="w-full flex gap-16"
          >
            <div
              className="flex-grow flex-basis-0"
            >
              <BusinessCard
                image={<img
                  alt={"Cedric Bals Image"}
                />}
                name="Cedric Bals"
                position="CEO"
                actionName="Termin planen"
              >

              </BusinessCard>
            </div>
            <div
              className="flex-grow-2 flex-basis-0"
            >
              <ContactForm/>
            </div>
          </div>
        </div>
        <HubblrPageLinks/>
      </FullSizeSection>
    </DarkLayout>
  )
}

export default ContactPage;