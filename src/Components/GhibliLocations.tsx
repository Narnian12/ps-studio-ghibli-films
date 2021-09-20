import { FC, useEffect } from 'react';
import {
  GhibliLocation,
  GhibliLocationsInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const GhibliLocations: FC<GhibliLocationsInterface> = ({
  ghibliLocations,
  setGhibliLocations,
}) => {
  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then((response) => response.json())
      .then((locations: [GhibliLocation]) => setGhibliLocations(locations));
  }, [setGhibliLocations]);

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
            <Typography variant="h6">Climate</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Terrain</Typography>
          </GridItemStyle>
        </Grid>
        <Grid item xs={1}>
          <GridItemStyle>
            <Typography variant="h6">Surface Water</Typography>
          </GridItemStyle>
        </Grid>
        {ghibliLocations?.map((elem: GhibliLocation) => (
          <>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.name}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.climate}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.terrain}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1} key={elem.id}>
              <GridItemStyle>
                <Typography>{elem.surface_water}</Typography>
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
