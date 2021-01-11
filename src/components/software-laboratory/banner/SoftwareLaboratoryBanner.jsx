import React from 'react';
import { FormattedMessage } from 'react-intl';
import LightningImageSvg from '../../image-components/LightningImageSvg';
import flashyLogo from '../../../images/softwareLaboratory/flashy-logo.svg';

function SoftwareLaboratoryBanner() {
  return (
    <div className="w-full text-white bg-black overflow-hidden">
      <div className="relative container mx-auto flex justify-center">
        <div className="flex-grow" />
        <div className="mt-12 mb-32 w-full md:w-3/4 xl:w-2/3 flex flex-col items-center text-center">
          <img className="w-36 h-auto mb-10" src={flashyLogo} alt="hubblr logo" />
          <h1 className="text-5xl font-extrabold leading-none mb-10 px-12">
            <FormattedMessage id="software-laboratory.banner.heading" />
          </h1>
          <div className="text-2xl font-light leading-tight">
            <FormattedMessage id="software-laboratory.banner.text" />
          </div>
        </div>
        <div className="flex-grow relative">
          <LightningImageSvg
            className="max-md:hidden max-w-none absolute w-auto -ml-4"
            style={{ height: '125%', bottom: '2rem' }}
          />
        </div>
      </div>
    </div>
  );
}

export default SoftwareLaboratoryBanner;
