import React, { FC, useEffect, useState } from 'react';
import {
  GhibliFilm,
  GhibliFilmsInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export const GhibliFilms: FC<GhibliFilmsInterface> = ({
  ghibliFilms,
  setGhibliFilms,
  setNumPages,
  currPage,
}) => {
  const [displayedFilms, setDisplayedFilms] = useState<GhibliFilm[]>([]);

  // Initialize data and first set of displayedFilms
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((films: [GhibliFilm]) => {
        setGhibliFilms(films);
        setDisplayedFilms(films.length / 5 >= 1 ? films.slice(0, 5) : films);
      });
  }, [setGhibliFilms]);

  // Deduce how many pages there should be
  useEffect(() => {
    setNumPages(Math.ceil(ghibliFilms.length / 5));
  }, [setNumPages, ghibliFilms]);

  // Update displayedFilms based on page
  useEffect(() => {
    setDisplayedFilms(ghibliFilms.slice(currPage * 5 - 5, currPage * 5));
  }, [currPage, ghibliFilms]);

  return displayedFilms.length > 0 ? (
    <ListWrapper>
      <Grid columns={12} container spacing={1}>
        <Grid item xs={2}>
          <GridItemStyle>
            <Typography variant="h6">Title</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={5}>
          <GridItemStyle>
            <Typography variant="h6">Description</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={2}>
          <GridItemStyle>
            <Typography variant="h6">Director</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Date</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Time</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Score</Typography>
          </GridItemStyle>
        </Grid>
        {displayedFilms?.map((elem: GhibliFilm) => (
          <React.Fragment key={elem.id}>
            <Grid item xs={2}>
              <GridItemStyle>
                <Typography>{elem.title}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={5}>
              <GridItemStyle>
                <Typography>{elem.description}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={2}>
              <GridItemStyle>
                <Typography>{elem.director}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.release_date}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.running_time}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.rt_score}</Typography>
              </GridItemStyle>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </ListWrapper>
  ) : (
    <ProgressWrapper>
      <CircularProgress />
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
`;

const ListWrapper = styled.div`
  margin: 80px 0px 0px 0px;
`;

const GridItemStyle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;
