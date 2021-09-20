import { FC, useEffect } from 'react';
import {
  GhibliSpecies,
  GhibliSpeciesInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const GhibliSpeciesList: FC<GhibliSpeciesInterface> = ({
  ghibliSpecies,
  setGhibliSpecies,
}) => {
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/species')
      .then((response) => response.json())
      .then((species: [GhibliSpecies]) => setGhibliSpecies(species));
  }, [setGhibliSpecies]);

  return (
    <AnimeListWrapper>
      <Grid columns={4} container spacing={1}>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Name</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Classification</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Eye Colors</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Hair Colors</Typography>
          </GridItemStyle>
        </Grid>
        {ghibliSpecies?.map((elem: GhibliSpecies) => (
          <>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.name}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.classification}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.eye_colors}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.hair_colors}</Typography>
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
