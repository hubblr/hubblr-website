import React, { useRef } from 'react';
import VenturesArrowImage from '../images/ventures/venturesArrow.png';
import SectionHeading from '../components/indexPageMainContent/SectionHeading/SectionHeading';
import Layout from '../components/pageLayouts/Layout';

function VenturesPage() {
  const contentRef = useRef();
  // const contentWidth = useClientWidth(contentRef);

  <Layout>
    <div ref={contentRef} className="">
      <SectionHeading heading="Ventures" />
      <img src={VenturesArrowImage} alt="" />
    </div>
  </Layout>;
}

export default VenturesPage;
