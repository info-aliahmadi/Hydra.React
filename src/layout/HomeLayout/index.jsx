import 'react';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import HomePageThemeCustomization from 'themes/HomePageTheme';

export default function HomeLayout() {
  return (
    <>
      <HomePageThemeCustomization>
        <Navigation sx={{ xIndex: 9999999999999, position: 'relative' }} />
        <Outlet />
        <Footer />
      </HomePageThemeCustomization>
    </>
  );
}
