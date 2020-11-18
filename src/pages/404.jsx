import React from 'react';

import SEO from '../components/seo/Seo';
import Layout from '../components/layouts/Layout';
import NavBar from '../components/nav-bar/NavBar';
import NavBarHomeButton from '../components/nav-bar/NavBarHomeButton';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';

function NotFoundPage() {
  return (
    <Layout
      navBar={
        <NavBar
          className="sticky"
          leftContent={<NavBarHomeButton />}
          rightContent={<NavBarContactButton />}
        />
      }
    >
      <SEO title="404.seo.title" description="404.seo.description" />
      <div>
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
