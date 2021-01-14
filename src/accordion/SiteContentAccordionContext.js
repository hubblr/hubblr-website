import { createContext } from 'react';

const SiteContentAccordionContext = createContext({
  setSiteContent: () => {},
  changeSectionStatus: () => {},
  openSections: [],
});

export default SiteContentAccordionContext;
