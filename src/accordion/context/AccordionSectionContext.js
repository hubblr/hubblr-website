import { createContext } from 'react';

const AccordionSectionContext = createContext({
  uuid: undefined,
  isOpen: false,
});

export default AccordionSectionContext;
