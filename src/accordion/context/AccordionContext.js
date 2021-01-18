import { createContext } from 'react';

const AccordionContext = createContext({
  openSections: [],
  changeSectionStatus: () => {},
  sideContentMap: {},
  addSideContentForSection: () => {},
});

export default AccordionContext;
