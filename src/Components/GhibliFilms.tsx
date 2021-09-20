import { FC, useEffect } from 'react';
import {
  GhibliFilm,
  GhibliFilmsInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const GhibliFilms: FC<GhibliFilmsInterface> = ({
  ghibliFilms,
  setGhibliFilms,
}) => {
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((response) => response.json())
      .then((films: [GhibliFilm]) => setGhibliFilms(films));
  }, [setGhibliFilms]);

  return (
    <AnimeListWrapper>
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
        {ghibliFilms?.map((elem: GhibliFilm) => (
          <>
            <Grid item xs={2} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.title}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={5} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.description}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={2} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.director}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.release_date}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.running_time}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.rt_score}</Typography>
              </GridItemStyle>
            </Grid>
          </>
        ))}
      </Grid>
    </AnimeListWrapper>
  );
};

const AnimeListWrapper = styled.div`
  margin: 80px 0px 0px 0px;
`;

const GridItemStyle = styled.div`
  display: flex;
  justify-content: center;
`;
