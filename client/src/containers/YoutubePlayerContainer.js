import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import YoutubePlayer from '../components/YoutubePlayer';
import { loadVideo, subscribeToVideoId } from '../services/Socket';
import {
  YoutubePlayerContainerHeader,
  YoutubePlayerContainerText,
  YoutubePlayerContainerWrapper,
  YoutubeIDInput,
  YoutubeSubmitButton
} from '../styles/YoutubePlayerContainerStyles';

const YoutubePlayerContainer = ({ state, dispatch }) => {
  const [videoId, setVideoId] = useState('');
  const [liveVideoId, setLiveVideoId] = useState('');

  useEffect(() => {
    subscribeToVideoId((err, id) => {
      setVideoId(id);
      setLiveVideoId(id);
    });
  }, []);

  useEffect(() => {
    if (videoId === '') {
      setLiveVideoId('');
    }
  }, [videoId]);

  const handleChange = (e) => {
    setVideoId(e.target.value);
  };

  const handleClick = (e) => {
    setLiveVideoId(videoId);
    if (videoId) loadVideo(videoId);
  };

  return (
    <YoutubePlayerContainerWrapper>
      <YoutubePlayerContainerHeader color="primary">
        Youtube Player
      </YoutubePlayerContainerHeader>
      <YoutubePlayerContainerText>
        Masukan ID video youtube yang ingin diputar
      </YoutubePlayerContainerText>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          alignItems="flex-end"
          justify="center"
          spacing={2}
        >
          <Grid item>
            <YoutubeIDInput
              label="Video ID"
              value={videoId}
              onChange={handleChange}
            ></YoutubeIDInput>
          </Grid>
          <Grid item>
            <YoutubeSubmitButton
              onClick={handleClick}
              startIcon={<YouTubeIcon />}
            >
              Play
            </YoutubeSubmitButton>
          </Grid>
        </Grid>
      </Grid>
      <YoutubePlayer videoId={liveVideoId}></YoutubePlayer>
    </YoutubePlayerContainerWrapper>
  );
};

export default YoutubePlayerContainer;
