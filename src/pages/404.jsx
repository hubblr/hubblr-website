import React from 'react';
import SEO from '../components/seo/Seo';
import LayoutWrapper from '../components/layouts/LayoutWrapper';
import MainPageDarkLayout from '../components/layouts/MainPageDarkLayout';
import NavBarMainPage from '../components/nav-bar/NavBarMainPage';
import NavBarHomeButton from '../components/nav-bar/NavBarHomeButton';
import NavBarContactButton from '../components/nav-bar/NavBarContactButton';

function NotFoundPage() {
  return (
    <LayoutWrapper>
      <MainPageDarkLayout
        navBar={
          <NavBarMainPage
            className="sticky"
            desktopRightContent={
              <div className="flex justify-end items-center">
                <NavBarHomeButton className="mr-2" />
                <NavBarContactButton />
              </div>
            }
          />
        }
      >
        <SEO title="404.seo.title" description="404.seo.description" />
        <div>
          <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
            Looks like this page is a ghost that got abducted by aliens...
          </h2>
        </div>
      </MainPageDarkLayout>
    </LayoutWrapper>
  );
}

export default NotFoundPage;
