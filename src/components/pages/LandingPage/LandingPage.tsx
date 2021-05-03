import { Box, Hidden } from '@material-ui/core';

import { Header } from '../../ui/Header/Header';
import { HeroSection } from '../../ui/HeroSection/HeroSection';
import { BlurbSection } from '../../ui/BlurbSection/BlurbSection';

import { Footer } from '../../ui/Footer/Footer';

export const LandingPage = () => {
  return (
    <Box>
      <Header />
      <HeroSection />
      <BlurbSection />
      <Hidden mdDown>
        <Footer />
      </Hidden>
    </Box>
  );
};
