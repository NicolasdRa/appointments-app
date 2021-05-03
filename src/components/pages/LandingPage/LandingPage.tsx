import { Box, Hidden } from '@material-ui/core';

import { Header } from '../../ui/Header/Header';
import { HeroSection } from '../../ui/HeroSection/HeroSection';
import { BlurbSection } from '../../ui/BlurbSection/BlurbSection';

import { Footer } from '../../ui/Footer/Footer';

import { useStyles } from './styles';
import { BottomNav } from '../../ui/BottomNav/BottomNav';

export const LandingPage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
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
