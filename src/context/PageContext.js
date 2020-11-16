import { createContext } from 'react';

const PageContext = createContext({
  page: '', // can be used for special page behavior
});
export default PageContext;
