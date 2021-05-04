import { Box, Hidden } from '@material-ui/core';

import { Header } from '../../ui/Header/Header';
import { HeroSection } from '../../ui/HeroSection/HeroSection';
import { BlurbSection } from '../../ui/BlurbSection/BlurbSection';

import { Footer } from '../../ui/Footer/Footer';

import { BottomNav } from '../../ui/BottomNav/BottomNav';

export const LandingPage = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <BlurbSection />
      <Footer />
      <Hidden mdUp>
        <BottomNav />
      </Hidden>
    </Box>
  );
};
