import React from 'react';

import Seo from '../components/seo/Seo';

function NotFoundPage() {
  return (
    <div>
      <Seo title="404: Not found" />
      <div>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </div>
  );
}

export default NotFoundPage;
