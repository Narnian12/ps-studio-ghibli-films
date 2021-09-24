import React, { FC, useEffect, useState } from 'react';
import {
  GhibliLocation,
  GhibliLocationsInterface,
} from '../Interfaces/ghibli-interface';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

export const GhibliLocations: FC<GhibliLocationsInterface> = ({
  ghibliLocations,
  setGhibliLocations,
  setNumPages,
  currPage,
}) => {
  const [displayedLocations, setDisplayedLocations] = useState<
    GhibliLocation[]
  >([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/locations')
      .then((response) => response.json())
      .then((locations: [GhibliLocation]) => {
        setGhibliLocations(locations);
        setDisplayedLocations(
          locations.length / 5 >= 1 ? locations.slice(0, 5) : locations
        );
      });
  }, [setGhibliLocations]);

  useEffect(() => {
    setNumPages(Math.ceil(ghibliLocations.length / 5));
  }, [setNumPages, ghibliLocations]);

  useEffect(() => {
    setDisplayedLocations(
      ghibliLocations.slice(currPage * 5 - 5, currPage * 5)
    );
  }, [currPage, ghibliLocations]);

  return displayedLocations.length > 0 ? (
    <ListWrapper>
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
        {displayedLocations?.map((elem: GhibliLocation) => (
          <React.Fragment key={elem.id}>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.name}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.climate}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.terrain}</Typography>
              </GridItemStyle>
            </Grid>
            <Grid item xs={1}>
              <GridItemStyle>
                <Typography>{elem.surface_water}</Typography>
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
