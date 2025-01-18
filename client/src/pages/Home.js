import React from 'react';
import { HeroWrapper, HeroImageWrapper } from '../styles/pages/HomeStyles';
import { Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home">
      <HeroWrapper>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3">Nonton Youtube Bareng</Typography>
            <Typography variant="subtitle1">
              Nonton bareng video Youtube favoritmu bersama teman-temanmu
            </Typography>
            <Button
              component={Link}
              to="/rooms"
              variant="contained"
              style={{ background: '#E2C044', color: '#393E41' }}
            >
              Watch Now
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <HeroImageWrapper style={{ height: '100%', width: '100%' }} />
          </Grid>
        </Grid>
      </HeroWrapper>
    </div>
  );
};

export default Home;
